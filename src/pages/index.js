import React, { useState, useEffect } from 'react';
import { useHistory } from '@docusaurus/router';

function Home() {
  const history = useHistory();
  const [fade, setFade] = useState(false);

  useEffect(() => {
    // 设置一个计时器，2秒后开始透明度渐变
    const timerFade = setTimeout(() => {
      setFade(true);
    }, 2000);

    // 在渐变结束后，导航到文档页面
    const timerNavigate = setTimeout(() => {
      history.push('/docs');  // 此路径可能需要根据你的Docusaurus配置进行调整
    }, 4000);

    return () => {
      clearTimeout(timerFade);
      clearTimeout(timerNavigate);
    };
  }, [history]);

  return (
    <div 
      style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      className={fade ? 'fade-out' : ''}
    >
      <img src="/img/genshin start.jpg" alt="Welcome" style={{ width: '100%', height: '100vh' }}/>
    </div>
  );
}

export default Home;
