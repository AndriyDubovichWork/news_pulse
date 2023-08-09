import axios, { AxiosResponse } from 'axios';

export default function getUserIp() {
  type resT = {
    data: {
      ip: string;
    };
  };
  return (
    axios
      .get<resT, resT>('https://api.ipify.org?format=json')
      // .then((response) => response.json())
      .then((res) => res.data.ip)
  );
}
