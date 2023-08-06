"use client"; // For code related to client add this to the first line in component jsx file

// We do not add ".." here because its not a relative import, its a module import
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../page.module.css"; // We add a ".." here because its a relative import

export default function Header(props) {
  // NOTE: the state values should be stored at the component those values are stored in
  // you can only pass them as props to child components

  // Store state values(values that change overtime, here )
  const [tl, setTL] = useState(0);
  const [dollarExchangeRate, setDollarExchangeRate] = useState(1);
  // 0 = Make clicks value 0
  // The first item in the array is the state value, which you can name anything.
  // The Second item is the function to update the value
  // this function is generally named: set + first value name
  function handleGetMoney(e) {
    setTL(tl + 100 + tl * 50);
  }
  function stopDollar(e) {
    setDollarExchangeRate(dollarExchangeRate * 2);
  }
  function escapeTheMatrix(e) {
    let dollarMoney = tl / dollarExchangeRate;
    dollarMoney > 1000 * 1000
      ? window.open("https://www.cobratate.com/")
      : console.log("You aren't ready to escape the matrix");
  }
  return (
    <div className={styles.menu}>
      <StateShow tl={tl} dollar={Math.round((tl / dollarExchangeRate) * 100) / 100} />
      <ActionUI
        handleGetMoney={handleGetMoney}
        stopDollar={stopDollar}
        escapeTheMatrix={escapeTheMatrix}
      />
      <Link href="/chat">Go to Chat App</Link>
      {/* <Link> is used for links that go to diff pages in your app */}
      {/* <a> is for links that go to entirely different websites */}
      {/* This is required because Next.js handles going to different pages when using <Link>,
      the browser doesn't do a complete page refresh. */}
    </div>
  );
}

function StateShow(props) {
  return (
    <div>
      <h1>
        You have {props.tl}₺ which is worth {props.dollar}$
      </h1>
      <p>Quick! Increase your money before Dollar gets higher!</p>
    </div>
  );
}

function ActionUI(props) {
  return (
    <div className={styles.actionUI}>
      <button onClick={props.handleGetMoney}>Gain Money</button>
      <button onClick={props.stopDollar}>Stop the Dollar</button>
      <button onClick={props.escapeTheMatrix}>Escape The Matrix</button>
    </div>
  );
}

function test(props) {
  return (
    <div>
      {/* NOTE: in here you can either wrap the arrow func in {} and make it return smth, 
          or make it () and it will automatically work. BOTH work, its just an implementation detail.*/}
      {/* You need to give an unique key(id) for performance reasons,
          otherwise react needs to update all of the elements in the container */}
      <ul>
        {props.someText
          ? props.someText.map((e) => {
              return <li key={e}>{e}</li>;
            })
          : ["Default 1", "Default 2", "Default 3", "Default 4", "Default 5"].map((e) => (
              <li key={e}>{e}</li>
            ))}
      </ul>
    </div>
  );
}

function test2(props) {
  return <p>{props.title ? props.title : "Default Text"}</p>;
}
