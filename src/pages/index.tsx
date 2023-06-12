import Layout from "@/components/Layout";
import "../styles/index.scss";
import emailIcon from "../assets/email.svg";
import Image from "next/image";
import Step from "@/components/Step";
import step1 from "../assets/invite.svg";
import step2 from "../assets/collect-coins.svg";
import step3 from "../assets/voucher.svg";
import useHome from "./useHome";

const steps = [
  {
    img: step1,
    title: "INVITE FRIENDS",
    text: "Refer friends with your unique referral link.",
  },
  {
    img: step2,
    title: "COLLECT COINS",
    text: "Get 1 coin for each friend that installs our extension using your referral link.",
  },
  {
    img: step3,
    title: "GET VOUCHER",
    text: "Redeem for a $20 hotel booking voucher once you collect 20 coins.",
  },
];

const Home = () => {
  const { email, handleChange, message, sendEmail } = useHome();
  return (
    <div className="app">
      <Layout>
        <main>
          <div className="container">
            <div className="main">
              <div className="email">
                <h3>REFER FRIENDS AND GET REWARDS</h3>
                <p className="describe">
                  Refer your friends to us and earn hotel booking vouchers. Well
                  give you 1 coin for each friend that installs our extension.
                  Minimum cash-out at 20 coins.
                </p>

                {message.msg && <p className={message.type}>{message.msg}</p>}
                <div className="input-icons">
                  <Image
                    alt="email"
                    src={emailIcon}
                    className="fa fa-envelope icon"
                  />
                  <input
                    className="input-field"
                    type="text"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => handleChange(e)}
                  />
                </div>

                <button onClick={sendEmail}>Get Referral Link</button>

                <p className="info">Limits on max rewards apply.</p>
              </div>
              <div className="instruction">
                {steps.map((item, i) => (
                  <Step
                    position={i % 2 == 0 ? "left" : "right"}
                    key={i}
                    img={item.img}
                    title={item.title}
                    text={item.text}
                  />
                ))}
              </div>
            </div>
          </div>
        </main>
      </Layout>
    </div>
  );
};

export default Home;
