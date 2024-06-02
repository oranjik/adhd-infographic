"use client";
import React from "react";
import { useState } from "react";
import styles from "../../../page.module.css";
import main from "../../../main.module.css";
import Header from "../../../Header";
import Buttons from "../../../container/Buttons";
import Contents from "../../../container/Contents";
import Motion from "../../../container/Motion";

const totalNum = 4;

export default function Page() {
  const [index, setIndex] = useState(0);
  const changePage = (num) => {
    if (index + num > totalNum - 1) {
      setIndex(0);
    } else if (index + num < 0) {
      setIndex(totalNum - 1);
    } else {
      setIndex(index + num);
    }
  };
  console.log(index);

  return (
    <main className={styles.main}>
      <Header />
      <div className={main.container}>
        <Buttons changePage={changePage} />
        <div className={main.viewContainer}>
          <div
            className={main.contentsContainer}
            style={{ left: index * 1100 * -1 }}
          >
            <Motion src="/motion/2021/2107.mp4" />
            <Contents
              src="/2107-1.png"
              tagName="anger"
              emotionName="Feeling uncertain about the future"
              thinkingName="“I am afraid of my future life with ADHD.”"
            >
              <>
                <CardItem date="+953" contents="Sad" />
                <CardItem date="+953" contents="Sad" />
                <CardItem date="+953" contents="Sad" />
                <CardItem date="+953" contents="Sad" />
              </>
            </Contents>
            <Contents
              src="/2107-2.png"
              tagName="depression"
              emotionName="2"
              thinkingName="“I am afraid of my future life with ADHD.”"
            >
              <>
                <CardItem date="2022-05-03" contents="Sad" />
                <CardItem date="+953" contents="Sad" />
                <CardItem date="+953" contents="Sad" />
                <CardItem date="+953" contents="Sad" />
              </>
            </Contents>
            <Contents
              src="/2107-3.png"
              tagName="denial"
              emotionName="3"
              thinkingName="“I am afraid of my future life with ADHD.”"
            >
              <>
                <CardItem date="+953" contents="Sad" />
                <CardItem date="+953" contents="Sad" />
                <CardItem date="+953" contents="Sad" />
                <CardItem date="+953" contents="Sad" />
              </>
            </Contents>
          </div>
        </div>
      </div>
    </main>
  );
}

function CardItem({ date, contents }) {
  return (
    <div className={main.cardItem}>
      <p className={main.cardDate}>{`+${daysSince(date)}`}</p>
      <p className={main.cardItemContent}>{contents}</p>
    </div>
  );
}

function daysSince(dateString) {
  const firstDay = new Date("2021-07-30");

  // 입력된 날짜 가져오기
  const inputDate = new Date(dateString);

  // 두 날짜의 차이를 밀리초로 계산
  const differenceInTime = inputDate.getTime() - firstDay.getTime();

  // 밀리초를 일수로 변환
  const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));

  return differenceInDays;
}
// console.log(
//   `오늘은 ${dateString}로부터 ${daysSince(dateString)}일 지났습니다.`,
// );
