import withAnt from '../shared/Ant/withAnt';
import 'isomorphic-fetch';

import {
    Layout
} from 'antd';

const { Content } = Layout;

const Post = ({ title, content }) =>
    <Layout>
        <Content>
            <h1>{title}</h1>
            <div dangerouslySetInnerHTML={{ __html: content }} />
            hello
        </Content>
    </Layout>

Post.getInitialProps = async ({ query: { id } }) => {
    const response = await fetch(`${process.env.BLOGGER_URL}/${id}?key=${process.env.API_KEY}`);
    const data = await response.json();
    const title = data.title;
    const content = data.content;
};

export default withAnt(Post);