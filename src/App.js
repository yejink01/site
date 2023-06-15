import React, { useState } from "react";
import styled from "styled-components";
import Lo from "./image/노홍철.jpg";
import U from "./image/유재석.png";
import J from "./image/정준하.jpg";
import JJ from "./image/정형돈.jpg";
import P from "./image/박명수.jpg";
import H from "./image/하하.jpg";
const questions = [
  {
    id: 1,
    question: "나와 비슷한 무한도전 멤버는?",
    choices: ["위트있는", "의외의 상황에서 웃음을 자주 사는"],
  },
  {
    id: 2,
    question: "어떤 캐릭터나 역할을 맡을 때 잘 어울리는 특징은?",
    choices: ["활발한", "차분한"],
  },
  {
    id: 3,
    question: "다른 사람들과 상호작용할 때 가장 재미를 느끼는 방법은?",
    choices: ["대화에서 웃음을 주도하는", "독특한 행동을 하는"],
  },
  {
    id: 4,
    question: "어떤 분야에서 특별한 재능을 가지고 있나요?",
    choices: ["음악적인 재능", "예술적인 재능"],
  },
  {
    id: 5,
    question: "어떤 모습으로 사람들에게 기억될까요?",
    choices: ["활기찬 에너지로 가득한", "꾸준하고 실력있는"],
  },
  {
    id: 6,
    question: "다른 사람의 고민을 들었을때 어떤 말을 하나요",
    choices: ["현실적인", "공감하는"],
  },
  {
    id: 7,
    question: "새로운 도전에 대해 어떤 태도를 보이나요?",
    choices: ["신중한", "설레는"],
  },
];

const ResultPage = ({ member }) => {
  const memberCharacteristics = {
    유재석:
      "무한도전의 주인공이자 MC로서 활약하였습니다. 유쾌한 성격과 재치 있는 말빨을 가지고 있으며, 상황에 따라 다양한 캐릭터로 변신하는 면모를 보여줍니다. 코너에서의 도전 정신과 뛰어난 진행력으로 프로그램의 주도적인 역할을 수행했습니다.",
    박명수:
      "명랑한 성격과 유머 감각을 가지고 있어 코너에서 많은 웃음을 선사했습니다. 다양한 캐릭터로 변신하며 유재석과의 호흡이 좋아 웃음을 이끌어내는 데 큰 역할을 했습니다. 또한 음악적인 재능을 발휘하여 가수로도 활동했습니다.",
    정준하:
      "무한도전에서는 보컬로 활동하며, 음악적인 면모를 보여줬습니다. 차분하고 침착한 성격으로, 멤버들 사이에서 중재자 역할을 수행하기도 했습니다. 의견을 내세우는 면모도 있었고, 종종 까칠한 말투로 재치 있는 반응을 보여줬습니다.",
    하하: "유머 감각이 뛰어나며 밝고 쾌활한 성격으로, 코너에서 많은 웃음을 선사했습니다. 다양한 캐릭터로 변신하며, 유재석과의 호흡이 좋아 프로그램의 재미를 더했습니다. 음악적인 재능을 가지고 있어 가수로도 활동했습니다.",
    정형돈:
      "무한도전에서는 주로 개그맨으로 활동하며, 코너에서의 웃음을 책임졌습니다. 쾌활한 성격과 유머 감각으로 많은 사람들을 웃게 했습니다. 가끔은 다소 과격한 면모를 보이기도 했지만, 그로 인해 코너에 활기를 불어넣었습니다.",
    노홍철:
      "무한도전에서는 유쾌한 성격과 독특한 말투로 사람들을 웃게 했습니다. 다양한 캐릭터로 변신하며 멤버들과의 호흡이 좋아 프로그램에 밝은 분위기를 더했습니다. 다재다능한 면모를 가지고 있어 다양한 코너에서 능력을 발휘했습니다.",
  };

  const characteristics = memberCharacteristics[member];

  const handle = () => {
    if (navigator.share) {
      navigator.share({
        title: "당신과 비슷한 무한도전 멤버는?",
        text: "당신과 비슷한 무한도전 멤버는?",
        url: "https://site-auhd-yejink01.vercel.app/",
      });
    } else {
      console.log("공유하기가 지원되지 않는 환경 입니다.");
    }
  };

  return (
    <ResultContainer>
      <ResultText onClick={handle}>당신과 비슷한 무한도전 멤버는?😂</ResultText>
      {member === "유재석" ? (
        <img src={U} width={250} height={250} />
      ) : member === "정준하" ? (
        <img src={J} width={250} height={250} />
      ) : member === "정형돈" ? (
        <img src={JJ} width={250} height={250} />
      ) : member === "하하" ? (
        <img src={H} width={250} height={250} />
      ) : member === "박명수" ? (
        <img src={P} width={250} height={250} />
      ) : member === "노홍철" ? (
        <img src={Lo} width={250} height={250} />
      ) : undefined}
      <MemberName>{member}</MemberName>
      <Answer>{characteristics}</Answer>
    </ResultContainer>
  );
};

const QuizPage = ({ question, choices, onSelect }) => {
  return (
    <QuestionContainer>
      <QuestionText>{question}</QuestionText>
      <ButtonContainer>
        {choices.map((choice, index) => (
          <Button key={index} onClick={() => onSelect(choice)}>
            {choice}
          </Button>
        ))}
      </ButtonContainer>
    </QuestionContainer>
  );
};

const App = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState("");

  const handleAnswerSelect = (choice) => {
    setAnswers([...answers, choice]);
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      const members = calculateResult();
      setResult(members);
    }
  };

  const calculateResult = () => {
    const memberScores = {
      유재석: 0,
      박명수: 0,
      정준하: 0,
      하하: 0,
      정형돈: 0,
      노홍철: 0,
    };

    answers.forEach((choice) => {
      switch (choice) {
        case "위트있는":
          memberScores["유재석"] += 1;
          memberScores["하하"] += 1;
          break;
        case "의외의 상황에서 웃음을 자주 사는":
          memberScores["박명수"] += 1;
          memberScores["정준하"] += 1;
          break;
        case "활발한":
          memberScores["유재석"] += 1;
          memberScores["하하"] += 1;
          break;
        case "차분한":
          memberScores["박명수"] += 1;
          memberScores["노홍철"] += 1;
          break;
        case "대화에서 웃음을 주도하는":
          memberScores["유재석"] += 1;
          memberScores["하하"] += 1;
          break;
        case "독특한 행동을 하는":
          memberScores["박명수"] += 1;
          memberScores["노홍철"] += 1;
          break;
        case "음악적인 재능":
          memberScores["유재석"] += 1;
          memberScores["박명수"] += 1;
          break;
        case "예술적인 재능":
          memberScores["정준하"] += 1;
          break;
        case "활기찬 에너지로 가득한":
          memberScores["하하"] += 1;
          memberScores["노홍철"] += 1;
          break;
        case "꾸준하고 실력있는":
          memberScores["유재석"] += 1;
          memberScores["박명수"] += 1;
          break;
        case "현실적인":
          memberScores["박명수"] += 1;
          memberScores["정형돈"] += 1;
          break;
        case "공감하는":
          memberScores["정준하"] += 1;
          memberScores["하하"] += 1;
          break;
        case "신중한":
          memberScores["박명수"] += 1;
          break;
        case "설레는":
          memberScores["하하"] += 1;
          memberScores["노홍철"] += 1;
          break;

        default:
          break;
      }
    });

    let maxScore = -Infinity;
    let resultMembers = [];

    for (const member in memberScores) {
      if (memberScores[member] > maxScore) {
        maxScore = memberScores[member];
        resultMembers = [member];
      } else if (memberScores[member] === maxScore) {
        resultMembers.push(member);
      }
    }

    return resultMembers;
  };

  return (
    <Container>
      {result ? (
        <ResultPage member={result[0]} />
      ) : (
        <QuizPage
          question={questions[step].question}
          choices={questions[step].choices}
          onSelect={handleAnswerSelect}
        />
      )}
    </Container>
  );
};

const Container = styled.div`
  background-color: pink;
  font-size: large;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const QuestionText = styled.h1`
  font-size: 24px;
  text-align: center;
  margin-bottom: 40px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button`
  padding: 12px 24px;
  font-size: 18px;
  margin-bottom: 16px;
`;

const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const ResultText = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const MemberName = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
`;

const Answer = styled.div`
  font-size: 30px;
  color: gray;
  text-align: center;
  width: 600px;
`;
export default App;
