import React, { useState } from 'react'
import { Navigate, Link } from 'react-router-dom'
import { doSignInWithEmailAndPassword, doSendEmailVerification } from '../../firebase/auth'
import { useAuth } from '../authContext/AuthContext'
import './Login.css'
import Image from "../../image/Login Image.jpeg";

import { getAuth, setPersistence, browserSessionPersistence } from "firebase/auth"; // Firebase Authentication 모듈에서 필요한 함수와 객체를 가져옵니다.

const Login = () => {
    const { userLoggedIn } = useAuth()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isSigningIn, setIsSigningIn] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const onSubmit = async (e) => {
        e.preventDefault()
        if (!isSigningIn) {
            setIsSigningIn(true)
            try {    //로그인 성공
                const auth = getAuth(); // Firebase Authentication의 인증 객체를 가져옵니다.
                await setPersistence(auth, browserSessionPersistence); // 인증 정보의 지속성을 설정합니다.

                await doSignInWithEmailAndPassword(email, password)
                await doSendEmailVerification();
            } catch (error) { //로그인 실패
                //문제 -> 로그인에 실패하였습니다만 출력된다
                if (error.code === 'auth/user-not-found') {
                    setErrorMessage('이메일이 일치하지 않습니다.')
                    setIsSigningIn(false)
                    return
                } else if (error.code === 'auth/wrong-password') {
                    setErrorMessage('비밀번호가 일치하지 않습니다.')
                    setIsSigningIn(false)
                    return
                } else {
                    setErrorMessage('로그인에 실패하였습니다.')
                }
                setIsSigningIn(false)
                return
            }
        }
    }

    return (
        <div>
            {userLoggedIn && (<Navigate to={'/homepage'} replace={true} />)}

            <main className="L-container">
                <div className="L-card">
                    <div className="L-title">
                        <h3>Login</h3>
                    </div>

                    {/* 입력 폼 */}
                    <form onSubmit={onSubmit} className="L-form">
                        {/* 이메일 입력 */}
                        <div className="L-form-group">
                            <label>Email</label>
                            <input
                                type="email"
                                autoComplete="email"
                                required value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="input"
                            />
                        </div>

                        {/* 비밀번호 입력 */}
                        <div className="L-form-group">
                            <label>Password</label>
                            <input
                                type="password"
                                autoComplete="current-password"
                                required value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="input"
                            />
                        </div>

                        {errorMessage && <span className="error">{errorMessage}</span>}

                        {/* 제출 버튼 */}
                        <button
                            type="submit"
                            disabled={isSigningIn}
                            className={`login-button ${isSigningIn ? 'disabled' : 'active'}`}
                        >
                            {isSigningIn ? 'Signing In...' : 'Sign In'}
                        </button>
                    </form>

                    {/* 누르면 회원가입으로 이동하는 글자 */}
                    <p className="forCreateAccountLine">
                        Go to Sign Up Page<br/>
                        <Link to={'/register'} className="linkToRegister">Sign up</Link>
                    </p>
                </div>
            </main>

            <img className="L-sprout" src={Image}/>
        </div>
    )
}

export default Login