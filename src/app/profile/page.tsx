"use client";

import React from "react";
import style from "./User.module.scss";
import ArrowedLink from "../components/ArrowedLink/ArrowedLink";
import Image from "next/image";
import IconWithText from "../components/IconWithText/IconWithText";
import { AiOutlineStar, AiOutlineUser } from "react-icons/ai";
import { BsFillFileEarmarkPostFill } from "react-icons/bs";
import Button from "../components/styledInputs/Button/Button";
import useGetData from "../hooks/useGetData";
import GridArticles from "../components/GridArticles/GridArticles";
import Paginator from "../components/Paginator/Paginator";

export default function User() {
  const { news, shuffleNews } = useGetData();

  return (
    <main className={style.user}>
      <ArrowedLink current="Writer" />
      <div className={style.writerInfo}>
        <Image
          className={style.banner}
          width={1491}
          height={150}
          alt="Image Banner"
          src={`https://random.imagecdn.app/1491/150/?avoidCachingSoItwillBeDifferentImages=bannerImage`}
        />
        <div className={style.writer}>
          <div className={style.user}>
            <Image
              className={style.userImg}
              width={75}
              height={75}
              alt="user Image"
              src={`https://random.imagecdn.app/75/75/?avoidCachingSoItwillBeDifferentImages=userImage`}
            />
            <p className={style.name}>hello world</p>
          </div>

          <div className={style.about}>
            <IconWithText icon={<AiOutlineStar />} text="Rate : 4.2" />
            <IconWithText icon={<AiOutlineUser />} text="Follower : 1.2k" />
            <IconWithText
              icon={<BsFillFileEarmarkPostFill />}
              text="Post : 29"
            />
          </div>

          <Button value="+ Follow" className={style.button} />
        </div>
      </div>
      <div className={style.articles}>
        <GridArticles news={news} isGrid />
      </div>
      <Paginator shuffleNews={shuffleNews} />
    </main>
  );
}
