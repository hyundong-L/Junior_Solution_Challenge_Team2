import React, { useState } from 'react'
import { Navigate, Link } from 'react-router-dom'
import { useAuth } from '../authContext/AuthContext'
import { doCreateUserWithEmailAndPassword, checkEmailExistence } from '../../firebase/auth'
import './Register.css'
import Image from "../../image/Login Image.jpeg"

const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setconfirmPassword] = useState('')
    const [isRegistering, setIsRegistering] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const { userLoggedIn } = useAuth()

    const onSubmit = async (e) => {
        e.preventDefault()
        if (!isRegistering) {
            if (password.length < 6) {
                setErrorMessage('비밀번호는 최소 6자리 이상이어야 합니다.');
            } else if (password !== confirmPassword) {
                setErrorMessage('비밀번호와 비밀번호 확인이 일치하지 않습니다.')
            } else {
                //메시지 출력이 아닌 에러만 발생...
                const emailExists = await checkEmailExistence(email);
                if (emailExists) {
                    setIsRegistering(false)
                    setErrorMessage("이미 사용 중인 이메일입니다.")
                } else {
                    setIsRegistering(true);
                    await doCreateUserWithEmailAndPassword(email, password);
                }
            }
        }
    }

    return (
        <>
            {userLoggedIn && (<Navigate to={'/home'} replace={true} />)}

            <main className="R-container">
                <div className="R-card">
                    <div className="R-title">
                        <h3>Create Account</h3>
                    </div>

                    {/* 입력 폼 */}
                    <form onSubmit={onSubmit} className="R-form">
                        {/* email 입력 */}
                        <div className='R-form-group'>
                            <label>Email</label>
                            <input
                                type="email"
                                autoComplete="email"
                                required value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                                className="input-field"
                            />
                        </div>

                        {/* 비밀번호 입력 */}
                        <div className='R-form-group'>
                            <label>Password</label>
                            <input
                                disabled={isRegistering}
                                type="password"
                                autoComplete="new-password"
                                required value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);

                                }}
                                className="input-field"
                            />
                        </div>

                        {/* 비밀번호 확인 입력 */}
                        <div className='R-form-group'>
                            <label>Confirm Password</label>
                            <input
                                disabled={isRegistering}
                                type="password"
                                autoComplete="off"
                                required value={confirmPassword}
                                onChange={(e) => {
                                    setconfirmPassword(e.target.value);
                                }}
                                className="input-field"
                            />
                        </div>

                        {errorMessage && <span className="error-message">{errorMessage}</span>}

                        {/* 제출 버튼 */}
                        <button
                            type="submit"
                            disabled={isRegistering}
                            className={`R-button ${isRegistering ? 'disabled' : 'active'
                                }`}
                        >
                            {isRegistering ? 'Signing Up...' : 'Sign Up'}
                        </button>

                        {/* 로그인 창으로 돌아가기 */}
                        <p className="additional-info">
                            Go to Sign In Page<br />
                            <Link to="/login" className="login-link">
                                Continue
                            </Link>
                        </p>
                    </form>
                </div>
            </main>

            <img className="R-sprout" src={Image}/>
        </>
    )
}

export default Register