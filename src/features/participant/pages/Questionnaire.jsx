import style from './Questionnaire.module.css';
import Header from '../component/Header';
import Sidebar from '../component/Sidebar';
import BienvenueText from '../component/BienvenueText';
import QuestionnaireInfo from '../component/QuestionnaireInfo';
import Satisfaction from '../component/Satisfaction';
import TableDevaluation from '../component/TableDevaluation';

export default function Questionnaire() {
  return (
    <div className={style.container}>
        <Header />
        <Sidebar />
        <BienvenueText />
        <QuestionnaireInfo />
        <Satisfaction />
        <TableDevaluation />
    </div>
  )
}
