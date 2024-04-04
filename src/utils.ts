export function buildString(baseString: string, replaceString: string, withString: string): string {
  const newString = baseString.replace(replaceString, withString);
  return newString;
}

// Timezone Library is deliberately not used here.
export function convertUtcToIstDate(utcTimestamp: string): string {
  const utcDate = new Date(parseInt(utcTimestamp) * 1000);
  const istOffset = 330;
  const istDate = new Date(utcDate.getTime() + istOffset * 60 * 1000);
  const formattedIstDate = istDate.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return formattedIstDate;
}

export function convertUtcToIstTime(utcTimestamp: string): string {
  const utcDate = new Date(parseInt(utcTimestamp) * 1000);

  const utcHours = utcDate.getUTCHours();
  const utcMinutes = utcDate.getUTCMinutes();
  const utcSeconds = utcDate.getUTCSeconds();
  
  const istHours = utcHours + 5;
  const istMinutes = utcMinutes + 30;

  const adjustedHours = (istHours >= 24) ? istHours - 24 : istHours;
  const adjustedMinutes = (istMinutes >= 60) ? istMinutes - 60 : istMinutes;
  const formattedHours = ('0' + adjustedHours).slice(-2);
  const formattedMinutes = ('0' + adjustedMinutes).slice(-2);

  return `${formattedHours}:${formattedMinutes}:${('0' + utcSeconds).slice(-2)}`;
}
