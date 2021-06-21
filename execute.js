const rotateEvent = () => {
    document.body.style.transform = 'rotate(180deg)';
    
  };
  const reset = () => {
    document.body.style.transform = '';
  }

  const helloWorld = () => {
    window.alert('Hello world!!')
  }
  
  
  const onMessage = (message) => {
    switch (message.action) {
      case 'ROTATE':
        rotateEvent();
        break;
      case 'RESET':
        reset();
        break;
        case 'HELLOWORLD':
        helloWorld();
        break;
      default:
        break;
    }
  }
  
  chrome.runtime.onMessage.addListener(onMessage);