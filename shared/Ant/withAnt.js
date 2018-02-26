import React, { Component } from 'react';
// import injectTapEventPlugin from 'react-tap-event-plugin';
import Head from 'next/head';

// try {
//     injectTapEventPlugin();
// } catch (e) {
// }

const withAntDesign = ComposedComponent => {
    class HOC extends Component {

        static async getInitialProps(ctx) {
            const { req } = ctx;
            const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
            const subProps = await ComposedComponent.getInitialProps(ctx)

            return {
                ...subProps,
                userAgent
            };
        }

        render() {
            const { userAgent } = this.props;
            return (
                <div>
                    <Head>
                        <title>Leo's Portfolio</title>
                        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
                    </Head>
                    <ComposedComponent {...this.props} />
                </div>
            )
        }
    }
    return HOC;
}

export default withAntDesign;