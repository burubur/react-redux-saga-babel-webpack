import React, { Component } from 'react';
import { Row, Col, Form, Input, Button, Icon, Divider, Steps, Card } from 'antd'
import './index.less'

class index extends Component {
    render() {
        return (
            <div className='rsch-face'>
                <div className='rsch-face-slogan'>
                    Washing & Dry Cleaning
                </div>
                <div className='rsch-face-address-availability'>
                    <Row type='flex' justify='center'>
                        <Col span={8}>
                            <Form>
                                <Form.Item label='Alamat / Kode POS' labelCol={{span: 6, offset: 9}}>
                                    <Input.Search
                                        enterButton
                                        placeholder='Masukan alamat atau kode POS disini...'
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
                <div className='rsch-face-service'>
                    <Icon type='tag' /> Pilih jenis layanan
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    <Icon type='clock-circle' /> Tentukan penjemputan & pengiriman
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    <Icon type='pay-circle' /> Bayar dengan uang cash atau GoPay
                </div>
                </Row>
                <Row type='flex' justify='center'>
                    <Col span={12}>
                        <Row>
                            <Col>
                                <div className='rsch-face-service-detail'>
                                    <Divider>
                                        Proses
                                    </Divider>
                                    <Row>
                                        <Col span={10} offset={7} className='rsch-face-service-description'>
                                            Satu pelanggan satu mesin, kami menjamin keamanan setiap pakaian pelanggan.
                                        </Col>
                                    </Row>
                                </div>
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
                            <Col>
                                <div className='rsch-face-step-detail'>
                                <Divider>
                                    Harga
                                </Divider>
                                    <Row>
                                        <Col span={10} offset={7} className='rsch-face-service-description'>
                                            Harga kami berikan dengan sangat fleksibel sesuai dengan jenis layanan yang dipilih.
                                        </Col>
                                    </Row>
                                </div>
                                <Row type='flex' gutter={24} justify='center'>
                                    <Card>
                                        Cuci
                                    </Card>
                                    <Card>
                                        Setrika
                                    </Card>
                                    <Card>
                                        Cuci & Setrika
                                    </Card>
                                    <Card>
                                        Cuci Kering / Dry Cleaning
                                    </Card>
                                    <Card>
                                        Perbaikan Pakaian
                                    </Card>
                                </Row>
                            </Col>
                            <Col>
                                <div className='rsch-face-step-detail'>
                                <Divider>
                                    Cara Order
                                </Divider>
                                    <Row>
                                        <Col span={10} offset={7} className='rsch-face-service-description'>
                                            Cara order kami buatkan dengan semudah mungkin, dan demi kenyamanan dan kemudahan pelanggan anda dapat menyampaikan ide yang lebih baik yang sekiranya dapat diterapkan pada sistem kami.
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
                                        <Col span={10} offset={7} className='rsch-face-service-description'>
                                            Cara order kami buatkan dengan semudah mungkin, dan demi kenyamanan dan kemudahan pelanggan anda dapat menyampaikan ide yang lebih baik yang sekiranya dapat diterapkan pada sistem kami.
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
