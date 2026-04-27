const physical = `Soporte Presencial

1. Equipos aceptados: Laptops, PCs, dispositivos moviles y consolas. No se recibe linea blanca ni electrodomesticos ajenos a la informatica.
2. Almacenaje: Equipos no reclamados en el plazo acordado generaran cuotas de almacenaje. Tras abandono prolongado, el equipo se considerara para reciclaje o disposicion final.
3. Recepcion: El equipo debe entregarse con carga suficiente para encendido inicial frente al cliente. No se asume responsabilidad por fallas no detectadas en el encendido de recepcion.
4. Respaldos: La informacion se conserva de 5 a 7 dias naturales en servidor temporal. Tras este periodo, los datos se eliminan permanentemente por seguridad. Es responsabilidad del cliente verificar su respaldo a tiempo.`;

const remote = `Soporte Remoto

1. Privacidad: El cliente debe cerrar toda ventana, documento o chat personal antes de iniciar la sesion. No se asume responsabilidad por informacion visualizada accidentalmente.
2. Acceso: Se requiere escala de privilegios (Administrador) para realizar intervenciones tecnicas. El cliente debe estar presente para autorizar dichos permisos.
3. Estabilidad: Se requiere una conexion a internet estable para evitar interrupciones en el proceso tecnico.`;

const project = `Desarrollo de Software

1. Requerimientos: El cliente debe proporcionar una lista detallada de funciones deseadas. Cambios mayores tras la aprobacion del analisis inicial podran incurrir en costos adicionales.
2. Compromiso: Se requiere comunicacion fluida. La falta de respuesta prolongada (ghosting) pausara el proyecto indefinidamente.
3. Seguimiento: Las revisiones se realizaran via Meet. Se solicita puntualidad y aviso previo en caso de reagendar.`;

const encode = (s) => Buffer.from(Array.from(s).reverse().join('')).toString('base64');

console.log('---BEGIN STRINGS---');
console.log('PHYSICAL:', encode(physical));
console.log('REMOTE:', encode(remote));
console.log('PROJECT:', encode(project));
console.log('---END STRINGS---');
