import React from "react";
import style from "./sendPost.module.scss";
import ArrowedLink from "@/app/components/ArrowedLink/ArrowedLink";
import WriterInfo from "@/app/components/WriterInfo/WriterInfo";
import Input from "@/app/components/styledInputs/Input/Input";
import UserInput from "@/app/components/styledInputs/UserInput/UserInput";
import FileInput from "@/app/components/styledInputs/FileInput/FileInput";
import TextArea from "@/app/components/styledInputs/TextArea/TextArea";
import Button from "@/app/components/styledInputs/Button/Button";
import Title from "@/app/components/Title/Title";

function SendPost() {
  return (
    <main className={style.sendPost}>
      <ArrowedLink current="Profile Send Post" />

      <WriterInfo isMarked />

      <div className={style.inputs}>
        <UserInput input={<Input />} title="Title" />
        <UserInput input={<Input />} title="Add tags" />
        <UserInput
          input={<FileInput />}
          title="Add image"
          className={style.imageInput}
        />
        <UserInput
          input={<TextArea />}
          title="Explanation"
          className={style.textArea}
        />

        <div className={style.submittion}>
          <Button
            value={"Draft"}
            isHihglighted={false}
            style={{ width: "5vw" }}
          />
          <Button
            value={"Preview"}
            isHihglighted={false}
            style={{ width: "5vw" }}
          />
          <Button value={"Public"} style={{ width: "5vw" }} />
        </div>
      </div>
    </main>
  );
}

export default SendPost;
