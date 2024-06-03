import styles from "./page.module.css";
import main from "./main.module.css";
import Header from "./Header";
import Month from "./main/Month";
import Blank from "./main/Blank";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <div className={main.yearContainer}>
        <div className={main.gridYearTitle}>
          <h2 />
        </div>
        <div className={main.gridMonthTitle}>
          <div className={main.monthName}>
            <p className={main.monthText}>month</p>
            <h2 className={main.month}>01</h2>
          </div>
          <div className={main.monthName}>
            <h4>&nbsp;</h4>
            <h2 className={main.month}>02</h2>
          </div>
          <div className={main.monthName}>
            <h4>&nbsp;</h4>
            <h2 className={main.month}>03</h2>
          </div>
          <div className={main.monthName}>
            <h4>&nbsp;</h4>
            <h2 className={main.month}>04</h2>
          </div>
          <div className={main.monthName}>
            <h4>&nbsp;</h4>
            <h2 className={main.month}>05</h2>
          </div>
          <div className={main.monthName}>
            <h4>&nbsp;</h4>
            <h2 className={main.month}>06</h2>
          </div>
          <div className={main.monthName}>
            <h4>&nbsp;</h4>
            <h2 className={main.month}>07</h2>
          </div>
          <div className={main.monthName}>
            <h4>&nbsp;</h4>
            <h2 className={main.month}>08</h2>
          </div>
          <div className={main.monthName}>
            <h4>&nbsp;</h4>
            <h2 className={main.month}>09</h2>
          </div>
          <div className={main.monthName}>
            <h4>&nbsp;</h4>
            <h2 className={main.month}>10</h2>
          </div>
          <div className={main.monthName}>
            <h4>&nbsp;</h4>
            <h2 className={main.month}>11</h2>
          </div>
          <div className={main.monthName}>
            <h4>&nbsp;</h4>
            <h2 className={main.month}>12</h2>
          </div>
        </div>
      </div>
      <div className={main.yearContainer}>
        <div className={main.gridYear}>
          <p>year</p>
          <h2>2021</h2>
        </div>
        <div className={main.gridMonth}>
          <Blank />
          <Blank />
          <Blank />
          <Blank />
          <Blank />
          <Blank />
          <Month href="2021/07" src="/circle/2021/2107.png" />
          <Month href="2021/08" src="/circle/2021/2108.png" />
          <Month href="2021/09" src="/circle/2021/2109.png" />
          <Month src="/circle/2021/2110.png" />
          <Month href="2021/11" src="/circle/2021/2111.png" />
          <Month href="2021/12" src="/circle/2021/2112.png" />
        </div>
      </div>
      <hr className={main.line} />
      <div className={main.yearContainer}>
        <div className={main.gridYear}>
          <h2>2022</h2>
        </div>
        <div className={main.gridMonth}>
          <Month src="/circle/2022/2201.png" />
          <Month href="2022/02" src="/circle/2022/2202.png" />
          <Month src="/circle/2022/2203.png" />
          <Month href="2022/04" src="/circle/2022/2204.png" />
          <Month src="/circle/2022/2205.png" />
          <Month href="2022/06" src="/circle/2022/2206.png" />
          <Month href="2022/07" src="/circle/2022/2207.png" />
          <Month href="2022/08" src="/circle/2022/2208.png" />
          <Month src="/circle/2022/2209.png" />
          <Month href="2022/10" src="/circle/2022/2210.png" />
          <Month href="2022/11" src="/circle/2022/2211.png" />
          <Month src="/circle/2022/2212.png" />
        </div>
      </div>
      <hr className={main.line} />
      <div className={main.yearContainer}>
        <div className={main.gridYear}>
          <h2>2023</h2>
        </div>
        <div className={main.gridMonth}>
          <Month src="/circle/2023/2301.png" />
          <Month href="2023/02" src="/circle/2023/2302.png" />
          <Month src="/circle/2023/2303.png" />
          <Month href="2023/04" src="/circle/2023/2304.png" />
          <Month href="2023/05" src="/circle/2023/2305.png" />
          <Month src="/circle/2023/2306.png" />
          <Month src="/circle/2023/2307.png" />
          <Month href="2023/08" src="/circle/2023/2308.png" />
          <Month src="/circle/2023/2309.png" />
          <Month src="/circle/2023/2310.png" />
          <Month href="2023/11" src="/circle/2023/2311.png" />
          <Month href="2023/12" src="/circle/2023/2312.png" />
        </div>
      </div>
      <hr className={main.line} />
      <div className={main.yearContainer}>
        <div className={main.gridYear}>
          <h2>2024</h2>
        </div>
        <div className={main.gridMonth}>
          <Month href="2024/01" src="/circle/2024/2401.png" />
          <Month href="2024/02" src="/circle/2024/2402.png" />
          <Month href="2024/03" src="/circle/2024/2403.png" />
          <Month href="2024/04" src="/circle/2024/2404.png" />
          <Blank />
          <Blank />
          <Blank />
          <Blank />
          <Blank />
          <Blank />
        </div>
      </div>
    </main>
  );
}
