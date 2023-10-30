import React, { useState, useEffect } from 'react';
import { useHistory } from '@docusaurus/router';

function useDeviceType() {
  const [device, setDevice] = React.useState('desktop'); // 默认为 desktop

  React.useEffect(() => {
    // 使用 matchMedia 判断设备类型
    const setResponsiveness = () => {
      if (window.innerWidth < 768) {
        setDevice('mobile');
      } else if (window.innerWidth < 992) {
        setDevice('tablet');
      } else {
        setDevice('desktop');
      }
    };

    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  return device;
}


function Home() {
  const device = useDeviceType();
  const history = useHistory();
  const [fade, setFade] = useState(false);
  let imagePath = "/img/genshin start.jpg"; // 默认为 desktop 图片
  if (device === 'mobile') {
    imagePath = "/img/genshin start phone.png"; // 手机图片路径
  }

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
      <img src={imagePath} alt="Welcome" style={{ width: '100%', height: '100vh' }}/>
    </div>
  );
}

export default Home;
