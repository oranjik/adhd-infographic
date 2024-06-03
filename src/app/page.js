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
          <Month src="/2021/2110.png" />
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
          <Month href="2022/01" src="/circle.png" />
          <Month href="2022/02" src="/circle.png" />
          <Month href="2022/03" src="/circle.png" />
          <Month href="2022/04" src="/circle.png" />
          <Month href="2022/05" src="/circle.png" />
          <Month href="2022/06" src="/circle.png" />
          <Month href="2022/07" src="/circle.png" />
          <Month href="2022/08" src="/circle.png" />
          <Month href="2022/09" src="/circle.png" />
          <Month href="2022/10" src="/circle.png" />
          <Month href="2022/11" src="/circle.png" />
          <Month href="2022/12" src="/circle.png" />
        </div>
      </div>
      <hr className={main.line} />
      <div className={main.yearContainer}>
        <div className={main.gridYear}>
          <h2>2023</h2>
        </div>
        <div className={main.gridMonth}>
          <Month href="2023/01" src="/circle.png" />
          <Month href="2023/02" src="/circle.png" />
          <Month href="2023/03" src="/circle.png" />
          <Month href="2023/04" src="/circle.png" />
          <Month href="2023/05" src="/circle.png" />
          <Month href="2023/06" src="/circle.png" />
          <Month href="2023/07" src="/circle.png" />
          <Month href="2023/08" src="/circle.png" />
          <Month href="2023/09" src="/circle.png" />
          <Month href="2023/10" src="/circle.png" />
          <Month href="2023/11" src="/circle.png" />
          <Month href="2023/12" src="/circle.png" />
        </div>
      </div>
      <hr className={main.line} />
      <div className={main.yearContainer}>
        <div className={main.gridYear}>
          <h2>2024</h2>
        </div>
        <div className={main.gridMonth}>
          <Month href="2024/01" src="/circle.png" />
          <Month href="2024/02" src="/circle.png" />
          <Month href="2024/03" src="/circle.png" />
          <Month href="2024/04" src="/circle.png" />
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
