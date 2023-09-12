import React from "react";
import Button from "../styledInputs/Button/Button";
import IconWithText from "../IconWithText/IconWithText";
import { AiOutlineStar, AiOutlineUser } from "react-icons/ai";
import { BsFillFileEarmarkPostFill } from "react-icons/bs";
import Image from "next/image";
import style from "./WriterInfo.module.scss";
import Title from "../Title/Title";
import Link from "next/link";
function WriterInfo({ isMarked }: { isMarked?: boolean }) {
  return (
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
          {isMarked ? (
            <>
              <Title title="marked" />
              <Title title="send post" />
              <Title title="posts" />
            </>
          ) : (
            <>
              <IconWithText icon={<AiOutlineStar />} text="Rate : 4.2" />
              <IconWithText icon={<AiOutlineUser />} text="Follower : 1.2k" />
              <IconWithText
                icon={<BsFillFileEarmarkPostFill />}
                text="Post : 29"
              />
            </>
          )}
        </div>

        {isMarked ? (
          <Link href={"/profile/edit"}>
            <Button
              isHihglighted={false}
              value={"Edit Profile"}
              className={style.button}
            />
          </Link>
        ) : (
          <Button value={"+ Follow"} className={style.button} />
        )}
      </div>
    </div>
  );
}

export default WriterInfo;
