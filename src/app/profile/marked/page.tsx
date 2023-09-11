"use client";

import React from "react";
import style from "./Marked.module.scss";
import Image from "next/image";
import Title from "@/app/components/Title/Title";
import useGetData from "@/app/hooks/useGetData";
import ArrowedLink from "@/app/components/ArrowedLink/ArrowedLink";
import Button from "@/app/components/styledInputs/Button/Button";
import GridArticles from "@/app/components/GridArticles/GridArticles";
import Paginator from "@/app/components/Paginator/Paginator";

export default function User() {
  const { news, shuffleNews } = useGetData();

  return (
    <main className={style.user}>
      <ArrowedLink current="Marked" />
      <div className={style.writerInfo}>
        <Image
          className={style.banner}
          width={1491}
          height={150}
          alt="Image Banner"
          src={`https://random.imagecdn.app/1491/150/?avoidCachingSoItwillBeDifferentImages=markedannerImage`}
        />
        <div className={style.writer}>
          <div className={style.user}>
            <Image
              className={style.userImg}
              width={75}
              height={75}
              alt="user Image"
              src={`https://random.imagecdn.app/75/75/?avoidCachingSoItwillBeDifferentImages=markedUserImage`}
            />
            <p className={style.name}>hello world</p>
          </div>

          <div className={style.about}>
            <Title title="marked" />
            <Title title="send post" />
            <Title title="posts" />
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
