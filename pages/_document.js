import Document, { Html, Head, Main, NextScript } from "next/document"

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/favicon.png" />
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.GA_TRACKING_ID}', {
                  page_path: window.location.pathname,
                });
              `,
            }}
          />
          <script
            async
            src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"
          ></script>
        </Head>

        <body>
          <Main />
          <NextScript />
          <df-messenger
            intent={process.env.CHATBOT_INTENT}
            chat-title={process.env.CHATBOT_TITLE}
            agent-id={process.env.CHATBOT_AGENT_ID}
            language-code={process.env.CHATBOT_LANG_CODE}
          ></df-messenger>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                document.addEventListener('DOMContentLoaded', function() {
                  const dfMessenger = document.querySelector('df-messenger');
                  dfMessenger.setAttribute('intent', '${process.env.CHATBOT_INTENT}');
                  dfMessenger.setAttribute('chat-title', '${process.env.CHATBOT_TITLE}');
                  dfMessenger.setAttribute('agent-id', '${process.env.CHATBOT_AGENT_ID}');
                  dfMessenger.setAttribute('language-code', '${process.env.CHATBOT_LANG_CODE}');
                });
              `,
            }}
          />
        </body>
      </Html>
    )
  }
}

export default MyDocument
