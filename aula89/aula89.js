const btn = document.getElementById('btn_imp');

btn.addEventListener('click', (e)=>{
    const conteudo = document.getElementById('tabela');

    let estilo = '<style>';
    estilo+='table {width:100%; font:25px calibri;}';
    estilo+='table, th, td {border:solid 2px #888; border-collapse: collapse;';
    estilo+='padding: 4px 8px; text-align: center;}';

    const win = window.open('', '', 'height=700, width=700');
    win.document.write('<html><head>');
    win.document.write('<title>CFB CURSOS</title>');
    win.document.write(estilo);
    win.document.write('</head>');
    win.document.write('<body>');
    win.document.write(conteudo);
    win.document.write('</body></html');
    win.print();
})