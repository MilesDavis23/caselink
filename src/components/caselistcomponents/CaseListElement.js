import { Container } from "react-bootstrap"

function CaseCard() {
    return (
        <>
            <Container>
                <div className="caseDetails">
                    <div className="caseTitle d-flex align-elements-start">
                        <p><strong> They stole my id. </strong></p>
                    </div>
                    <div className="caseDiscription d-flex align-elements-start">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ex sapien.
                            Curabitur ultrices pretium fermentum. Cras rhoncus pharetra magna, ut tincidunt enim bibendum a.
                            Nulla tempor aliquet purus quis dictum. Ut ultrices pharetra nisl in vestibulum. Donec dignissim nisl nec pretium viverra.
                            Sed sed sapien at velit vulputate iaculis id sit amet sem. Orci varius natoque penatibus et magnis dis parturient montes,
                            nascetur ridiculus mus.
                        </p>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default CaseCard;