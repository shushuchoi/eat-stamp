package com.EatStamp.domain;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import javax.validation.constraints.Pattern;

import org.hibernate.validator.constraints.Email;
import org.hibernate.validator.constraints.NotBlank;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

public class MemberVO {

	private int mem_num; //회원 고유 번호
	
	@NotBlank(message = "이메일은 필수 입력 항목입니다.")
	@Email(message = "이메일 형식에 맞지 않습니다.")
	private String mem_email; //회원 가입 이메일 + 카카오
	
	//@NotBlank(message = "비밀번호는 필수 입력 항목입니다.")
	//@Pattern(regexp = "(^(?=.*[A-Za-z])(?=.*\\d)(?=.*[$@$!%*#?&])[A-Za-z\\d$@$!%*#?&]{8,}$)", 
			//	message = "비밀번호는 8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.")
	private String mem_pw; //회원 비밀번호
	
	private String mem_birth; //회원 생년월일 + 카카오
	private String mem_nick; //회원 닉네임 + 카카오
	private String mem_genderCode; //회원 성별 코드 (f/m) + 카카오
	private String mem_profileCode; //회원 프로필 아이콘 코드 (female/male)
	private String mem_branchCode; //회원 구분 코드 (common/kakao)
	private String mem_mail_key; //비밀번호 찾기 시 인증코드 
	private int mem_mail_auth; //비밀번호 찾기 시 인증 권한 변경 용도
	
	//<0403 최은지 비밀번호 입력값 체크용 컬럼> DB에는 존재 X
	private String mem_pwCheck;
	
	//<0403 최은지 비밀번호 인증번호 저장 컬럼
	private int mem_auth_pwEmail;
	
	
	//롬복 라이브러리 추가해서 바꿔놓자... 
	public int getMem_auth_pwEmail() {
		return mem_auth_pwEmail;
	}

	public void setMem_auth_pwEmail(int mem_auth_pwEmail) {
		this.mem_auth_pwEmail = mem_auth_pwEmail;
	}

	public String getMem_pwCheck() {
		return mem_pwCheck;
	}

	public void setMem_pwCheck(String mem_pwCheck) {
		this.mem_pwCheck = mem_pwCheck;
	}
	
	public int getMem_num() {
		return mem_num;
	}
	public void setMem_num(int mem_num) {
		this.mem_num = mem_num;
	}
	public String getMem_email() {
		return mem_email;
	}
	public void setMem_email(String mem_email) {
		this.mem_email = mem_email;
	}
	public String getMem_pw() {
		return mem_pw;
	}
	public void setMem_pw(String mem_pw) {
		this.mem_pw = mem_pw;
	}
	public String getMem_birth() {
		return mem_birth;
	}
	public void setMem_birth(String mem_birth) {
		this.mem_birth = mem_birth;
	}
	public String getMem_genderCode() {
		return mem_genderCode;
	}
	public void setMem_genderCode(String mem_genderCode) {
		this.mem_genderCode = mem_genderCode;
	}
	public String getMem_profileCode() {
		return mem_profileCode;
	}
	public void setMem_profileCode(String mem_profileCode) {
		this.mem_profileCode = mem_profileCode;
	}
	public String getMem_branchCode() {
		return mem_branchCode;
	}
	public void setMem_branchCode(String mem_branchCode) {
		this.mem_branchCode = mem_branchCode;
	}
	public String getMem_mail_key() {
		return mem_mail_key;
	}
	public void setMem_mail_key(String mem_mail_key) {
		this.mem_mail_key = mem_mail_key;
	}
	public int isMem_mail_auth() {
		return mem_mail_auth;
	}
	public void setMem_mail_auth(int mem_mail_auth) {
		this.mem_mail_auth = mem_mail_auth;
	}
	
	public String getMem_nick() {
		return mem_nick;
	}
	public void setMem_nick(String mem_nick) {
		this.mem_nick = mem_nick;
	}
	
	public int getMem_mail_auth() {
		return mem_mail_auth;
	}
	
	@Override
	public String toString() {
		return "MemberVO [mem_num=" + mem_num + ", mem_pw=" + mem_pw +  " ,mem_auth_pwEmail"+ mem_auth_pwEmail+ ", mem_email=" + mem_email 
				+ ", mem_birth=" + mem_birth + ", mem_nick=" + mem_nick + ", mem_genderCode=" + mem_genderCode 
				+ ", mem_branchCode=" + mem_branchCode + ", mem_mail_key=" + mem_mail_key + ", mem_genderCode=" + mem_genderCode
				+ ", mem_profileCode=" + mem_profileCode + ", mem_mail_auth=" + mem_mail_auth + "]";
	}
	
	
}
