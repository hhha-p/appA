import { MicroAppWithMemoHistory } from 'umi';

const DocsPage = () => {
  console.log('window A :', window);
  console.log('window a Proxy :', window.history instanceof Object);


  return (
    <div>
      <p>appA</p>
      <MicroAppWithMemoHistory
        autoSetLoading
        name="appB"
        url={"/appB/docs"}
      />
    </div>
  );
};

export default DocsPage;