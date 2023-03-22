import Head from "next/head";
import { useState, useEffect } from "react";
import MuiRadioButton from "../Components/SWPCustomRadioButton.js";
import Input from "../Components/SWPInput.js";
import LineChart from "../Components/SWPLineChart.js";
import CollapsibleBox from "../Components/SWPCollapsibleBox.js";
// import RelatedCalculators from "../Components/Cagr/RelatedCalculators.js";

export default function Home() {
  const [radioValue, setRadioValue] = useState('1');
  const [totalInvestment, setTotalInvestment] = useState(100000);
  const [withdrawal, setWithdrawal] = useState(15000);
  const [returnRate, setReturnRate] = useState(7);
  const [timePeriod, setTimePeriod] = useState(10);
  const [graphPoints, setGraphPoints] = useState([107000, 114490, 122504, 131080, 140255, 150073, 160578, 171819, 183846,
    196715]);
  const [totalAmt, setTotalAmt] = useState(196716);
  // const [estReturns, setEstReturns] = useState(96716);
  const [finalYear, setFinalYear] = useState(3);


  // useEffect(() => {
  //   console.log('est val changed to:', estReturns);
  //   calculateGraphPoints();
  // }, [estReturns]);

  function calculate() {
    // let cumulativeTotalInvestment = totalInvestment * timePeriod * 12;
    // let interestQuarterly = 0;
    // let totalAmount = totalInvestment;
    // for (let i = 1; i <= timePeriod * 12; i++) {
    //   interestQuarterly += (totalAmount * (1 / 12) * interestRate) / 100;
    //   if (i % 3 == 0) {
    //     totalAmount += interestQuarterly;
    //     interestQuarterly = 0;
    //   }
    //   totalAmount += totalInvestment;
    // }
    // totalAmount -= totalInvestment
    // setDummyTotalInvestment(cumulativeTotalInvestment);
    // setEstReturns((Math.round(totalAmount - cumulativeTotalInvestment)));
    // setMaturityValue(Math.round(totalAmount));
    // calculateGraphPoints();

    let cumulativeAmt = totalInvestment;
    for(let i = 1; i <= timePeriod * 12; i++){
      cumulativeAmt -= withdrawal;
      cumulativeAmt += (cumulativeAmt * 1/12 * returnRate)/100;
    }
    setTotalAmt(Math.round(cumulativeAmt));

    cumulativeAmt = totalInvestment;
    let count = 0;
    while(cumulativeAmt >= withdrawal){
      cumulativeAmt -= withdrawal;
      cumulativeAmt += (cumulativeAmt * 1/12 * returnRate)/100;
      count+=1;
    }
    setFinalYear(count/12);
    calculateGraphPoints();
  }


  function calculateGraphPoints() {
    let points = [];
    // let interestQuarterly = 0;
    // let totalAmount = totalInvestment;

    // for (let i = 1; i <= timePeriod * 12; i++) {

    //   interestQuarterly += (totalAmount * (1 / 12) * interestRate) / 100;
    //   if (i % 3 == 0) {
    //     totalAmount += interestQuarterly;
    //     interestQuarterly = 0;
    //   }
    //   if (i % 12 == 0) {
    //     points.push(totalAmount);
    //   }
    //   totalAmount += totalInvestment;
      let cumulativeAmt = totalInvestment;
      points.push(cumulativeAmt);
      for(let i = 1; i <= timePeriod * 12; i++){
        cumulativeAmt -= withdrawal;
        cumulativeAmt += (cumulativeAmt * 1/12 * returnRate)/100;
        if(i % 12 == 0){
          points.push(cumulativeAmt);
        }
      }
      setGraphPoints(points);
}

  return (
    <>
      <Head>
        <title>SWP Calculator</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="stylesheet" as="font" data-href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&amp;family=Rubik:wght@400;500;600&amp;display=swap" />
        <link href="/dist/output.css" rel="stylesheet" />
        <link rel="icon" href='https://www.fundsindia.com/static/favicons/favicon.ico' />
      </Head>

      <div
        className={
          "bg-bg_image w-full h-full bg-center bg-cover object-cover fixed"
        }
      />

      <main
        className={
          "relative font-['Poppins'] text-[14px] [@media(max-width:1200px)]:p-5 [@media(min-width:1200px)]:p-20 w-full overflow-x-hidden flex-col justify-between text-[#464143] "
        }
      >
        <div className="app-bg-container overflow-hidden">
          <div className="mt-[50px]">
            <div
              className={
                "text-[#000000] font-semibold text-[36px] text-center [@media(min-width:1920px)]:text-[60px]"
              }
            >
              <span className={"text-[#0161FF] font-semibold  "}>SWP</span>{" "}
              Calculator
            </div>
            <p className={" mt-[10px] text-center leading-28 [@media(min-width:1920px)]:text-[18px]"}>
              {/* leading 18 ensures line spacing of 18px because leading includes the height of characters too  */}
              SWP is Systematic Withdrawal Plan. This SWP Calculator is an online calculator that gives you an idea on how long your corpus money will last or what would be the corpus remaining after a number of years of periodic withdrawals from your Mutual Fund investments. The remaining corpus amount is based on your current Investment, the expected annual rate of return, and withdrawal tenure.
            </p>
          </div>

          <div
            className={
              "flex w-full lg:max-h-[673px] mt-[50px] [@media(max-width:1000px)]:mt-[30px] [@media(min-width:200px)]:gap-4 lg:justify-between [@media(max-width:1000px)]:flex-col md:flex-col lg:flex-row  "
            }
          >
            <div
              className={
                "flex w-[50%] [@media(max-width:1000px)]:flex-col flex-row [@media(min-width:200px)]:gap-10 p-[30px] [@media(max-width:1000px)]:pb-[13px] [@media(max-width:1000px)]:w-[100%] lg:w-[75%] border-2 border-white rounded-[30px] shadow-md shadow-[#505C6227] bg-white bg-opacity-40 backdrop-blur-[30px] "
              }
            >

              <div className={"text-left [@media(max-width:1000px)]:w-[100%] w-[50%] "}>

                <div
                  className={
                    "flex flex-col font-medium space-y-[20px] [@media(min-width:1920px)]:text-[18px]"
                  }
                >

                  {/* Radio Buttons */}
                  <div>
                    <MuiRadioButton 
                      value={radioValue}
                      setValue = {setRadioValue}
                    />
                  </div>

                  <div>

                    <div>Total investment</div>
                    <Input
                      id='totalInvestment'
                      type='rupees'
                      value={totalInvestment}
                      setValue={setTotalInvestment}
                      min={10000}
                      max={10000000}
                      step={1000}
                    />
                  </div>

                  <div>
                  <div>Withdrawal per month </div>
                  <Input
                    id='totalInvestment'
                    type='rupees'
                    value={withdrawal}
                    setValue={setWithdrawal}
                    min={500}
                    max={50000}
                    step={500}
                  />
                </div>

                  <div>
                    <div>Expected return rate (p.a)</div>
                    <Input
                      id='interestRate'
                      type="percentage"
                      value={returnRate}
                      setValue={setReturnRate}
                      min={1}
                      max={30}
                      step={0.1}
                    />
                  </div>

                  <div>
                    <div>SWP Tenure (years)</div>
                    <Input
                      id='timePeriod'
                      value={timePeriod}
                      setValue={setTimePeriod}
                      min={1}
                      max={30}
                    />
                  </div>
                </div>

                <div
                  className={
                    "flex flex-warp justify-center mt-[40px] cursor-pointer "
                  }
                >
                  <div
                    className={
                      "flex justify-center items-center border-[1px] border-dashed border-[#00D382]  rounded-[35px] p-[4px] w-[250px] h-[56px] [@media(max-width:500px)]:w-[228px] [@media(max-width:500px)]:h-[54px] [@media(max-width:500px)]:p-[0px]"
                    }
                  >
                    <div
                      className={
                        "flex justify-center items-center text-white font-semibold rounded-[35px] top-[612px] left-[260px] shadow-lg shadow-[#36b3665d] bg-[#00d382] w-[100%] h-[100%] text-[18px] [@media(max-width:500px)]:w-[220px] [@media(max-width:500px)]:h-[46px]"
                      }
                      onClick={calculate}
                    >
                      Calculate
                    </div>
                  </div>
                </div>
              </div>

              {/* Line */}
              <div
                className={
                  " -my-4 -mx-2 [@media(max-width:1000px)]:-mx-2  [@media(max-width:1000px)]:h-0 [@media(max-width:1000px)]:w-auto lg:h-auto lg:w-0 rounded-[50px] border-[1px] border-solid border-[#707070] opacity-10"
                }
              ></div>

              {/* Total Chart Container*/}
              <div className={"[@media(max-width:1000px)]:w-[100%] lg:w-[50%]"}>

                {/* Charts/Graph */}
                <div className={" relative object-right-top [@media(min-width:200px)]:h-auto md:w-[100%]"}>
                  <LineChart key='' points={graphPoints} />
                </div>


                <div className={"flex-col text-[#464143] [@media(max-width:500px)]:mx-[15px] [@media(max-width:500px)]:my-[20px] [@media(min-width:1920px)]:text-[18px]"}>

                {radioValue === "1" 
                  ? 
                    <div>Your investments of <span className="font-semibold">{`${'\u20B9'} ${totalInvestment.toLocaleString("en-In")}`}</span> will last for approximately <span className="font-semibold">{`${'\u20B9'} ${finalYear.toLocaleString("en-In")}`}</span> years if you plan to withdraw <span className="font-semibold">{`${'\u20B9'} ${withdrawal.toLocaleString("en-In")}`}</span> each month.</div> 
                  : 
                    <div>You'll have approximately <span className="font-semibold">{`${'\u20B9'} ${totalAmt.toLocaleString("en-In")}`}</span> left at the end of <span className="font-semibold">{`${'\u20B9'} ${timePeriod.toLocaleString("en-In")}`}</span> years if you plan to withdraw <span className="font-semibold">{`${'\u20B9'} ${withdrawal.toLocaleString("en-In")}`}</span> each month from your investments of <span className="font-semibold">{`${'\u20B9'} ${totalInvestment.toLocaleString("en-In")}`}</span></div>}

                </div>
              </div>
            </div>

            {/* Side Panel */}
            <div
              className={
                " w-[30%] [@media(max-width:1000px)]:w-[100%] lg:w-[23%] max-h-['inherit'] px-[20px] py-[22px] [@media(max-width:1000px)]:px-[15px] [@media(max-width:1000px)]:py-[20px] [@media(max-width:1000px)]:mt-[20px] lg:mt-0 border-2 border-white rounded-[30px] shadow-md shadow-[#505C6227] bg-white bg-opacity-40 backdrop-blur-[30px] overflow-y-scroll [@media(min-width:1920px)]:text-[18px]"
              }
            >
              <div className={"font-semibold mb-[18px]"}>How to use this calculator?</div>
              <CollapsibleBox
                heading={'Systematic Withdrawal Plan'}
                content={'SWP stands for systematic withdrawal plan. Under SWP, if you invest lump sum in a mutual fund, you can set an amount you’ll withdraw regularly and the frequency at which you’ll withdraw.'}
                isSidePanel={true}
              />
              <CollapsibleBox
                heading={'Find out how long my investments will last'}
                content={'You can use the FundsIndia SWP calculator to calculate how long your investment would last if you withdraw at a specific rate.'}
                isSidePanel={true}
              />
              <CollapsibleBox
                heading={'Find out remaining balance after the SWP tenure'}
                content={'You can use the FundsIndia SWP calculator to calculate your remaining balance after the SWP tenure'}
                isSidePanel={true}
              />
              <CollapsibleBox
                heading={'Deciding the Withdrawal Amount'}
                content={'Since the FundsIndia SWP calculator helps you calculate both your balance after SWP tenure and how long your investment will last if you withdraw a specific amount, It can help you decide how much you should withdraw based on your preferences.'}
                isSidePanel={true}
              />
              {/* <CollapsibleBox
                heading={'Tax Implications on RD'}
                content={'The interest earned on a Recurring Deposit (RD) is taxable. The rate of tax depends on the individual\'s tax slab.'}
                isSidePanel={true}
              /> */}
              <CollapsibleBox
                heading={'Deciding the SWP Tenure'}
                content={'FundsIndia SWP calculator can help you decide the SWP tenure as it can calculate both your balance after SWP tenure and how long your investment will last if you withdraw a specific amount.'}
                isSidePanel={true}
                isLast={true}
              />
            </div>
          </div>

          {/* FAQ Panel */}
          <div
            className={
              " px-[30px] py-[20px] mt-[30px] [@media(max-width:700px)]:px-[15px] border-2 border-white rounded-[30px] shadow-md shadow-[#505C6227] bg-white bg-opacity-40 backdrop-blur-[30px] [@media(min-width:1920px)]:text-[18px]"
            }
          >
            <CollapsibleBox
              heading={'What is Systematic Withdrawal Plan?'}
              content={'It is a type of savings account where the depositor makes regular fixed deposits over a specified period of time, usually ranging from 6 months to 10 years. The depositor is required to make a fixed deposit each month, and in return, the bank pays a higher interest rate on the deposit as compared to a regular savings account. The interest rate offered on recurring deposits is generally higher than that offered on savings accounts but lower than the interest rate offered on fixed deposits.For example, let’s say you invested in an MF scheme an amount of ₹1 lakh for a year. Let’s assume that you decided to withdraw an amount of ₹10000 per month. So every month, the fund you have invested will reduce by ₹10000. The amount left every month after withdrawal will continue to remain invested. According to the Systematic Withdrawal Plan, a person must invest a specific sum and withdraw a specific portion of the invested corpus each month. The amount of the withdrawal will be subtracted from the investment while interest is still being earned on it.Calculating the monthly withdrawals and the total amount that has matured is challenging. With its SWP calculator, FundsIndia can assist you with these challenging computations. This Systematic Withdrawal Plan calculator makes it simple to calculate your matured amount based on your precise monthly withdrawals. Calculators are making mutual fund investing simpler for consumers.'}
            />

            <CollapsibleBox
              heading={'What is a SWP calculator?'}
              content={'An SWP calculator is a tool that helps you determine the amount of regular payments you can receive from your investments, based on the current value of your portfolio, the expected rate of return, and the frequency of withdrawals. The calculator can give you an estimate of how much you can expect to receive on a regular basis, based on your investment goals and needs.'}
            />

            <CollapsibleBox
              heading={'What are the withdrawal options available with SWPs?'}
              content={'These options are available with SWPs. Fixed interval SWP - Allows you to withdraw a fixed amount at regular intervals (daily, weekly, monthly, quarterly, etc.) Fixed amount SWP - Allows you to withdraw a fixed amount each time you make a withdraw.'}
            />

            <CollapsibleBox
              heading={'How can you use the SWP calculator?'}
              content={'This calculator can be used to calculate how long an investment would last if you withdraw at a specific rate or how much of your corpus will be left to withdraw after a specific period of time. Just plug in the fields required and you can get a visual representation of your investment.'}
            />

            <CollapsibleBox
              heading={'How does the SWP calculator work?'}
              content={'The SWP calculator takes 4 inputs namely, Total Investment, Withdrawal per month, Expected return rate and Time period of withdrawal.'}
              isFormula={true}
            />

            <CollapsibleBox
              heading={'When can I use a SWP calculator?'}
              content={'The SWP calculator can be used when you want to know how long your investment would last and how much of your corpus would be left if you withdraw at a specific rate.'}
            />
            <CollapsibleBox
              heading={'What are the long-term and short-term tax implications of SWP withdrawals?'}
              content={'Tax implications in case of Debt funds are as followsShort-term: If you withdraw from an SWP within a year of investing in a mutual fund, the amount withdrawn is considered as short-term capital gain and taxed as per your income tax slab.Long-term: If you hold the mutual fund units for more than a year before withdrawing through an SWP, the amount withdrawn is considered as long-term capital gain and taxed at a rate of 20% (plus surcharge and cess, if applicable) after indexation benefit. Indexation benefit adjusts the cost of investment to account for inflation and reduces the tax liability.In case of Equity fundsShort-term: If you withdraw from an SWP from an equity mutual fund before holding it for more than a year, the amount withdrawn is considered as short-term capital gain and taxed at your marginal tax rate. For individuals, the short-term capital gain tax is 15% of the withdrawal amount.Long-term: If you hold the equity mutual fund units for more than a year before withdrawing through an SWP, the amount withdrawn is considered as long-term capital gain and taxed at a lower rate of 10% (without any indexation benefit) as compared to the short-term capital gain tax rate.'}
            />

            <CollapsibleBox
              heading={'For a regular income stream, is SWP withdrawal better than Dividend plans?'}
              content={
                "SWP withdrawals and Dividend plans both have their pros and cons.Tax implications: Dividend income is taxed at a higher rate compared to long-term capital gains in India, so if tax efficiency is a concern, SWP withdrawals may be a better option.Liquidity: SWP withdrawals provide more flexibility in terms of the amount and frequency of withdrawals, whereas dividend plans offer a fixed amount of income.Investment objective: If the objective of your investment is capital appreciation, then SWP withdrawals may be more suitable as it allows you to keep your invested capital intact. On the other hand, if the primary objective is to generate a regular income, then dividend plans may be a better option.Market volatility: In a volatile market, SWP withdrawals from equity mutual funds can be affected, as the unit price can fluctuate and impact the amount of income received. Dividend plans are relatively stable in this regard, as the income is generated through dividends, which are paid out regardless of market conditions.Also, The type of mutual fund and the underlying portfolio also play a role in determining which option is more appropriate for you. For example, if you have invested in a growth-oriented equity fund, then SWP withdrawals may be more appropriate, as the value of your investment is likely to grow over time."}
                isLast={true}
            />
          </div>

          {/* Related Calculators */}
          {/* <RelatedCalculators
            contents={[
              ["NSC Calculator", "/nsc"],
              ["Mutual Funds Calculator", "/rd"],//same page
              ["FD Calculator", "/fd"],
              ["NPS Calculator", "/rd"],//same page
            ]}
          /> */}

        </div>
      </main>
    </>
  );
}
