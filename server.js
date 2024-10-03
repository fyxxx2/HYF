const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { MongoClient, ObjectId } = require('mongodb');

// Express 앱 초기화
const app = express();
app.use(express.json()); // JSON 형식의 요청을 처리

// MongoDB 연결 설정
const uri = 'mongodb+srv://admin:qwer1234@hyf.s69jkoo.mongodb.net/?retryWrites=true&w=majority&appName=HyF'; // MongoDB 주소
let client; // client 변수를 선언하고 초기화는 비동기 처리 후에 수행

async function connectToMongoDB() {
    try {
        client = new MongoClient(uri); // MongoDB 클라이언트 초기화
        await client.connect(); // 비동기로 MongoDB에 연결

        const db = client.db('hyfdb'); // 'hyf_database' 데이터베이스 사용
        return db.collection('user'); // 'users' 컬렉션 반환
    } catch (err) {
        console.log('MongoDB 연결 실패:', err);
    }
}

let usersCollection; // users 컬렉션을 저장할 변수

// MongoDB 연결을 완료한 후 컬렉션 할당
connectToMongoDB()
    .then((collection) => {
        usersCollection = collection;
        console.log('MongoDB 연결 성공');
    })
    .catch((err) => console.log('MongoDB 연결 실패:', err));

// JWT 비밀 키
const JWT_SECRET = 'your_jwt_secret_key';

// 루트 경로에서 회원가입 및 로그인 처리
app.post('/', async (req, res) => {
    const { email, password, action } = req.body; // action 필드를 추가해 로그인/회원가입 구분

    if (!action) {
        return res.status(400).json({ message: 'Action not specified' });
    }

    try {
        if (action === 'signup') {
            // 회원가입 처리
            if (!usersCollection) {
                return res.status(500).json({ message: 'Database connection not initialized yet' });
            }

            // 이메일 중복 체크
            const existingUser = await usersCollection.findOne({ email });
            if (existingUser) {
                return res.status(400).json({ message: 'Email already in use' });
            }

            // 비밀번호 해싱
            const hashedPassword = await bcrypt.hash(password, 10);

            // 새로운 사용자 생성 및 저장
            const newUser = {
                email,
                password: hashedPassword,
            };
            const result = await usersCollection.insertOne(newUser);
            return res.status(201).json({ id: result.insertedId, email: newUser.email });

        } else if (action === 'login') {
            // 로그인 처리
            if (!usersCollection) {
                return res.status(500).json({ message: 'Database connection not initialized yet' });
            }

            // 사용자 확인
            const user = await usersCollection.findOne({ email });
            if (!user) {
                return res.status(400).json({ message: 'User not found' });
            }

            // 비밀번호 확인
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(400).json({ message: 'Invalid credentials' });
            }

            // JWT 토큰 생성
            const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });
            return res.status(200).json({ token });
        } else {
            return res.status(400).json({ message: 'Invalid action' });
        }
    } catch (error) {
        return res.status(500).json({ message: 'An error occurred', error });
    }
});

// 서버 실행
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
});