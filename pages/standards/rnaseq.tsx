import React from "react";
import HtanNavbar from "../../components/HtanNavbar";
import Footer from "../../components/Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import {getContent} from "../../ApiUtil";

function Rnaseq() {
    const content = getContent("rnaseq-blurb","data-standards");
    return (
        <>
            <HtanNavbar/>
            <Container>
                <Row>
                    <Breadcrumb className="mt-3">
                        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                        <Breadcrumb.Item href="/standards">
                            Data Standards
                        </Breadcrumb.Item>
                        <Breadcrumb.Item active>Single Cell RNA Seq</Breadcrumb.Item>
                    </Breadcrumb>
                </Row>
                <Row>
                    <span dangerouslySetInnerHTML={{__html: content}}></span>
                </Row>
            </Container>
            <Footer/>
        </>
    );
}

export default Rnaseq;