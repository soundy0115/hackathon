import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.main`
  display: grid;
  place-content: center;
  width: 100vw;
  height: calc(100vh - 36px);
`;

const CenterBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const NavigateBtn = styled(Link)`
  text-decoration: underline;
  color: blue;
  cursor: pointer;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 20px;
`;

const ErrorMsg = styled.p`
  position: absolute;
  top: 25px;
  left: 2px;
  font-size: 10px;
  color: red;
`;

export default function SelectMode() {
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    resetField,
    formState: { errors },
  } = useForm();

  const onClicklEnterRoom = ({ code }) => {
    resetField("code");
    // 방의 카테고리 정보를 가져와서
    // 1. 방이 없으면 에러메세지
    // 2. 성공하면
    localStorage.setItem(
      "roomInfo",
      JSON.stringify({ role: "member", code: code })
    );
    navigate("/category/food");
    resetField("code");
  };

  const onClickCreateRoom = () => {
    const code = "1234";
    // 서버에서 방만들고 코드 받기
    localStorage.setItem(
      "roomInfo",
      JSON.stringify({ role: "leader", code: code })
    );
    navigate("/category");
  };

  useEffect(
    () =>
      localStorage.setItem(
        "roomInfo",
        JSON.stringify({ role: "individual", code: "no-code" })
      ),
    []
  );

  return (
    <Container>
      <CenterBox>
        <NavigateBtn to={"/category"}>혼자 하기</NavigateBtn>
        <button onClick={onClickCreateRoom}>방 만들기</button>
        <div>방 입장하기</div>
        <Form onSubmit={handleSubmit(onClicklEnterRoom)}>
          <input
            {...register("code", {
              minLength: { value: 4, message: "4자리 숫자를 입력해주세요." },
              maxLength: { value: 4, message: "4자리 숫자를 입력해주세요." },
            })}
            type="number"
            placeholder="4자리 숫자 입력하세요"
          />
          {errors.code && (
            <ErrorMsg>{errors.digit.message.toString()}</ErrorMsg>
          )}
          <input type="submit" />
        </Form>
      </CenterBox>
    </Container>
  );
}