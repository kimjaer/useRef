import React from 'react'
// import "./contact.scss";
import "bootstrap/dist/css/bootstrap.css";

const Contact = () => {
  return (
    <div className='contact bg-light py-5'>
      <form action="#none" className='cominfo container'>
        <fieldset className='text-center'>필수 정보</fieldset>
        <ul className='row'>
          <li className='col-12'>
            <input type="text" className='bg-white border' placeholder='회사 이름(필수)' required />
          </li>
          <li className='col-6'>
            <input type="text" className='bg-white border' placeholder='담당자 성함(필수)' required />
          </li>
          <li className='col-6'>
            <input type="text" className='bg-white border' placeholder='직책 (필수)' required />
          </li>

          <li className='col-6'>
            <input type="text" className='bg-white border' placeholder='전화번호(필수)' required />
          </li>
          <li className='col-6'>
            <input type="text" className='bg-white border' placeholder='이메일 주소(필수)' required />
          </li>

          <li className='col-12'>
            <strong className='d-block'>프로젝트 개요</strong>
            <textarea name="" className='bg-white border' id="" cols="50" rows="10" placeholder='프로젝트와 관련된 기초 정보를 입력해 주세요.
                *만약 RFP가 있으시다면 아래 "파일 업로드"를 선택해 파일을 첨부하여 주십시오.'>

            </textarea>
          </li>
        </ul>

      </form>
    </div>

  )
}

export default Contact