import { useEffect } from 'react';
import VConsole from 'vconsole';

export default function HomePage() {

  useEffect(() => {
    const vConsole = new VConsole();
    return () => {
      vConsole.destroy()
    }
  }, [])

  useEffect(() => {
    console.log('window.navigator.standalone: ', window.navigator.standalone)

    // window.location.href = "weixin://"
  }, [])

  return (
    <div>
      <p>current url is: {window.location.href}</p>
    </div>
  );
}
