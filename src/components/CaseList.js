import { Container } from "react-bootstrap"
import CaseCard from "./caselistcomponents/CaseListElement"

function CaseList(){


    return (
        <>
        <Container className="caseList">
            <CaseCard/>
            <CaseCard/>
            <CaseCard/>
            <CaseCard/>
            <CaseCard/>
            <CaseCard/>
            <CaseCard/>
            <CaseCard/>
            <CaseCard/>
            <CaseCard/>
            <CaseCard/>
        </Container>
        </>
    )
};

export default CaseList;