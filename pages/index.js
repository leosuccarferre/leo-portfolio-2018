import stylesheet from 'antd/dist/antd.min.css'

import withAnt from '../shared/Ant/withAnt'

import 'isomorphic-fetch';

import Link from 'next/link';

import {
    Button,
    Card,
    Col,
    Row,
    Layout
} from 'antd';

const { Header, Footer, Sider, Content } = Layout;

const Index = ({ posts }) =>
    <Layout style={{ height: "100vh" }}>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <style global jsx>{`
        #__next {
            height: 100%;
        }
        .logo {
            float: left;
            margin-right: 1rem;
        }
    `}</style>

        <Content style={{ padding: '32px' }}>
            <Row gutter={16} style={{ display: 'flex' }}>

                {
                    posts.map(x =>
                        <Card
                            loading={false}
                            hoverable
                            key={x.id}
                            title={x.title}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                            style={{ width: '25%' }}
                        >
                            <p>{x.id}</p>
                            <Button label="primary">
                                <Link href={`/post?id=${x.id}`} as={`/blog/${x.id}`}>
                                    <a>
                                        View project
                                        </a>
                                </Link>
                            </Button>
                        </Card>
                    )
                }

            </Row>
        </Content>
    </Layout>

Index.getInitialProps = async () => {
    const response = await fetch(`${process.env.BLOGGER_URL}?key=${process.env.API_KEY}`)
    const data = await response.json();
    return { posts: data.items }
}

export default withAnt(Index);