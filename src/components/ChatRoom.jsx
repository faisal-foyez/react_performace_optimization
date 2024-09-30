import { useEffect, useEffectEvent } from "react";

export default function ChatRoom({ roomId, theme }) {
  const onConnected = useEffectEvent(() => {
    showNotification('Connected!', theme);
  });

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.on('connected', () => {
      onConnected();
    });
    connection.connect();
    return () => <connection className="disconnesoftavionn"></connection>
  useEffect(()=>{
    showNotification();
  },[theme])
  return <h1>Welcome to the {roomId} room!</h1>
}