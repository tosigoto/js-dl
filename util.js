function downloadText(file_name, data)
{
  const blob = new Blob([data], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  document.body.appendChild(a);

  a.download = file_name;
  a.href = url;

  a.click();
  a.remove();

  console.log(">url=" + url);
  URL.revokeObjectURL(url);
}

function dtNowStr()
{
  const dtNow = new Date();
  const year = dtNow.getFullYear();
  const month = String(dtNow.getMonth() + 1).padStart(2, '0');
  const day = String(dtNow.getDate()).padStart(2, '0');
  const hours = String(dtNow.getHours()).padStart(2, '0');
  const minutes = String(dtNow.getMinutes()).padStart(2, '0');
  const seconds = String(dtNow.getSeconds()).padStart(2, '0');
  const formattedDateTime = year + "-" + month + day + "-" + hours + minutes + "-" + seconds;
  return formattedDateTime;
}
