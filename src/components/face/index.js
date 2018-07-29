import React, { Component } from 'react';
import { Row, Col, Form, Input, Button, Icon, Divider, Steps, Card } from 'antd'
import './index.less'

class index extends Component {
    render() {
        const responsiveLayout = {
            xs: { span: 22 },
            sm: { span: 20 },
            md: { span: 18 },
            lg: { span: 18 },
            xl: { span: 12 },
            xxl: { span: 8 }
        }

        const responsivePriceLayout = {
            xs: { span: 24 },
            sm: { span: 8 },
            md: { span: 12 },
            lg: { span: 8 },
            xl: { span: 8 },
            xxl: { span: 8 } ,
        }

        const processDesc = `Satu pelanggan satu mesin, keamanan setiap pakaian pelanggan sangat terjamin, jika ada pakaian hilang kami bersedia ganti rugi.`
        const priceDesc = `Harga sangat fleksibel sesuai dengan jenis layanan yang dipilih.`
        const orderDesc = `Pilih jenis layanan, Jadwalkan penjemputan, Bayar, Udah itu aja.`
        const paymentDesc = `Tunai, GoPay, Ovo, Kartu kredit.`

        return (
            <div className='rsch-face'>
                <div className='rsch-face-slogan'>
                    Washing & Dry Cleaning
                </div>
                <div className='rsch-face-address-availability'>
                    <Row type='flex' justify='center'>
                        <Col {...responsiveLayout}>
                            <Form>
                                <div className='rsch-center rsch-dark'>Alamat/Kode POS</div>
                                <Form.Item>
                                    <Input.Search
                                        enterButton
                                        placeholder='Masukan alamat disini'
                                    />
                                </Form.Item>
                            </Form>
                        </Col>
                    </Row>
                </div>
                <div className='rsch-face-chat'>
                    <Row type='flex' justify='center'>
                        <Button type='primary'>Chat</Button>
                    </Row>
                </div>
                <Row type='flex' justify='center'>
                    <Col {...responsiveLayout}>
                        <Row>
                            <Col>
                                <div className='rsch-face-service-detail'>
                                    <Divider>
                                        Proses Laundry
                                    </Divider>
                                    <Row>
                                        <Col className='rsch-face-service-description'>
                                            {processDesc}
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col>
                                <div className='rsch-face-step-detail'>
                                <Divider>
                                    Harga
                                </Divider>
                                    <Row>
                                        <Col className='rsch-face-service-description'>
                                            {priceDesc}
                                        </Col>
                                    </Row>
                                </div>
                                <Row type='flex' gutter={16} justify='center'>
                                    <Col {...responsivePriceLayout}>
                                        <Card
                                            className='rsch-card-padding-bottom'
                                            hoverable
                                            cover={<img alt='washing-image' src='assets/images/contents/washing.jpg' />}
                                        >
                                            <Card.Meta
                                                title='Cuci aja'
                                                className='rsch-price-desc'
                                                description='Harga: IDR 3.000'
                                            />
                                        </Card>
                                    </Col>
                                    <Col {...responsivePriceLayout}>
                                        <Card
                                            className='rsch-card-padding-bottom'
                                            hoverable
                                            cover={<img alt='ironing-image' src='assets/images/contents/ironing.jpg' />}
                                        >
                                            <Card.Meta
                                                title='Setrika'
                                                className='rsch-price-desc'
                                                description='Harga: IDR 3.000'
                                            />
                                        </Card>
                                    </Col>
                                    <Col {...responsivePriceLayout}>
                                        <Card
                                            className='rsch-card-padding-bottom'
                                            hoverable
                                            cover={<img alt='washing-ironing-image' src='assets/images/contents/washing-ironing.jpg' />}
                                        >
                                            <Card.Meta
                                                className='rsch-price-desc'
                                                title='Cuci & Setrika'
                                                description='Harga: IDR 6.000'
                                            />
                                        </Card>
                                    </Col>
                                    <Col {...responsivePriceLayout}>
                                        <Card
                                            className='rsch-card-padding-bottom'
                                            hoverable
                                            cover={<img alt='dry-cleaning-image' src='assets/images/contents/dry-cleaning.jpg' />}
                                        >
                                            <Card.Meta
                                                className='rsch-price-desc'
                                                title='Dry Cleaning'
                                                description='Harga: IDR 20.000'
                                            />
                                        </Card>
                                    </Col>
                                    <Col {...responsivePriceLayout}>
                                        <Card
                                            className='rsch-card-padding-bottom'
                                            hoverable
                                            cover={<img alt='dry-cleaning-image' src='assets/images/contents/vermax.jpg' />}
                                        >
                                            <Card.Meta
                                                className='rsch-price-desc'
                                                title='Perbaikan Pakaian'
                                                description='Harga: IDR 10.000'
                                            />
                                        </Card>
                                    </Col>
                                </Row>
                            </Col>
                            <Col>
                                <div className='rsch-face-step-detail'>
                                <Divider>
                                    Cara Order
                                </Divider>
                                    <Row justify='center'>
                                        <Col className='rsch-face-service-description'>
                                            {orderDesc}
                                        </Col>
                                        <Col>
                                            <div className='rsch-face-step-detail'>
                                                <Steps>
                                                    <Steps.Step title="Pilih" icon={<Icon type="tag" />} status='finish' />
                                                    <Steps.Step title="Jadwalkan" icon={<Icon type="clock-circle" />} status='finish' />
                                                    <Steps.Step title="Bayar" icon={<Icon type="pay-circle" />} status='finish' />
                                                </Steps>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col>
                                <div className='rsch-face-step-detail'>
                                <Divider>
                                    Pembayaran
                                </Divider>
                                    <Row>
                                        <Col className='rsch-face-service-description'>
                                            {paymentDesc}
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default index;
