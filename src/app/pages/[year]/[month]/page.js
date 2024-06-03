"use client";
import React from "react";
import { useState } from "react";
import styles from "../../../page.module.css";
import main from "../../../main.module.css";
import Header from "../../../Header";
import Buttons from "../../../container/Buttons";
import Contents from "../../../container/Contents";
import Motion from "../../../container/Motion";
import data from "./data.json";
import { useTranslation } from "@/app/contexts/TranslationContext";

export default function Page({ params }) {
  const [index, setIndex] = useState(0);
  const { language } = useTranslation();
  const changePage = (num) => {
    const totalNum = data[language][params.year][params.month].length + 1;
    if (index + num > totalNum - 1) {
      setIndex(0);
    } else if (index + num < 0) {
      setIndex(totalNum - 1);
    } else {
      setIndex(index + num);
    }
  };
  const fileName = params.year.slice(2) + params.month;
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
            <Motion src={`/motion/${params.year}/${fileName}.mp4`} />
            {data[language][params.year][params.month].map((datum, index) => (
              <Contents
                key={`${params.year}-${params.month}-${index}`}
                src={`/pageCircle/${params.year}/${fileName}-${index + 1}.png`}
                tagName={datum.tagName}
                emotionName={datum.emotionName}
                thinkingName={datum.thinkingName}
              >
                <>
                  {datum.memos &&
                    datum.memos.map((memo, memoIndex) => (
                      <CardItem
                        key={`${params.year}-${params.month}-${index}-${memoIndex}`}
                        date={memo.date}
                        contents={memo.contents}
                      />
                    ))}
                </>
              </Contents>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

function CardItem({ date, contents }) {
  return (
    <div className={main.cardItem}>
      <p className={main.cardDay}>+{daysSince(date)}</p>
      <p className={main.cardDate}>{date}</p>
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
