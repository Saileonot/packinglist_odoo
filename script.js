


// Función de control de acceso al estar el código accesible en GitHub
(function () {
    const contraseñaCorrecta = "1968"; // Puedes cambiar la contraseña aquí
    let intentos = 3; // Número de intentos permitidos

    if (sessionStorage.getItem('xtraiceAccessGranted') === 'true') return;

    while (intentos > 0) {
        let contraseñaIngresada = prompt("Uso exclusivo XTRAICE - 🔒 Introduce la contraseña:");

        if (contraseñaIngresada === contraseñaCorrecta) {
            sessionStorage.setItem('xtraiceAccessGranted', 'true');
            alert("PACKING LIST XTRAICE \n\n ✅ Acceso concedido.\n BIENVENIDO. \n\n Si ves algún error en la ejecución de la aplicación o sus resultados, puedes comunicármelo vía mail: tono@xtraice.com");
            return; // Permite que la aplicación continúe
        } else {
            intentos--;
            alert(`❌ Contraseña incorrecta. Intentos restantes: ${intentos}`);
        }
    }

    // Si se acaban los intentos, redirigir o bloquear acceso
    alert("🚫 Acceso denegado");
    document.body.innerHTML = "<h1>Acceso bloqueado ❌</h1>";
})();



let idioma = 'ES';
let unidadPeso = 'KG'; // KG o LB

function cambiarIdioma(nuevoIdioma) {
    idioma = nuevoIdioma;
    renderTable();
}

function cambiarUnidad(nuevaUnidad) {
    unidadPeso = nuevaUnidad;
    renderTable();
}


/* Catálogo histórico conservado como referencia; el catálogo activo se carga desde Productos_Odoo.txt.
const materiales = [
        { description: "Cleaning Machine 220v", nameEs: "Máquina de limpieza 220v", netWeight: 50.0, taricNumber: "8424.30.90.00" },
        { description: "Double runner shoe skate", nameEs: "Patín doble cuchilla", netWeight: 0.5, taricNumber: "9506.70.10.00" },
        { description: "Kit No Fix 4700 mm", nameEs: "Kit No Fix 4700 mm", netWeight: 8.0, taricNumber: "7214997910" },
        { description: "Kit No Fix 6000 mm", nameEs: "Kit No Fix 6000 mm", netWeight: 10.0, taricNumber: "7214997910" },
        { description: "Kit No Fix 700 mm", nameEs: "Kit No Fix 700 mm", netWeight: 2.0, taricNumber: "7214997910" },
        { description: "Amplifier", nameEs: "Amplificador", netWeight: 9.0, taricNumber: "85.18.40" },
        { description: "Scaffold with ladder", nameEs: "Andamio con escalera", netWeight: 70.0, taricNumber: "" },
        { description: "Antibacterial spray", nameEs: "Spray antibacteriano", netWeight: 0.5, taricNumber: "8424.81.10.00" },
        { description: "Barrier base for raised floor", nameEs: "Base de valla para suelo elevado", netWeight: 1.0, taricNumber: "7306.61.99" },
        { description: "Bear Skating Aid", nameEs: "Ayuda de patinaje oso", netWeight: 12.0, taricNumber: "9503.00.00.90" },
        { description: "Bench", nameEs: "Banco", netWeight: 13.4, taricNumber: "9401.69.00.00" },
        { description: "Caja Herramienta", nameEs: "Caja de herramientas", netWeight: 100.0, taricNumber: "8303009000" },
        { description: "Cleaning kit Home", nameEs: "Kit de limpieza doméstico", netWeight: 2.5, taricNumber: "3402.90.10" },
        { description: "Foam Mats", nameEs: "Colchonetas", netWeight: 10.0, taricNumber: "" },
        { description: "Colour light", nameEs: "Luz de colores", netWeight: 5.0, taricNumber: "85.41.40" },
        { description: "Curling Boards", nameEs: "Tableros de curling", netWeight: 5.0, taricNumber: "3403.99.00.10" },
        { description: "Curling Stone", nameEs: "Piedra de curling", netWeight: 5.0, taricNumber: "9506.91.90.00" },
        { description: "Curling Stone Handles", nameEs: "Mangos para piedra de curling", netWeight: 0.5, taricNumber: "3926.90.97.00" },
        { description: "Curved Silver Alum. Barriers", nameEs: "Valla curva aluminio plateado", netWeight: 20.0, taricNumber: "7610.90.00.80" },
        { description: "Curved Silver Fiber Barriers", nameEs: "Valla curva de fibra plateada", netWeight: 20.0, taricNumber: "7019.90.00.20" },
        { description: "Deep Cleaning Kit", nameEs: "Kit de limpieza profunda", netWeight: 22.0, taricNumber: "34.02.90.10" },
        { description: "disassembly pack", nameEs: "Kit de desmontaje", netWeight: 15.0, taricNumber: "8303009000" },
        { description: "DMX", nameEs: "Controlador DMX", netWeight: 0.3, taricNumber: "85.43.70.90" },
        { description: "Double Xtraice Sharpener Machine", nameEs: "Máquina doble afiladora Xtraice", netWeight: 38.0, taricNumber: "8460.31.00.00" },
        { description: "Wooden ladders", nameEs: "Escalones de madera", netWeight: 30.0, taricNumber: "" },
        { description: "Estructura OTON", nameEs: "Estructura OTON", netWeight: 9000.0, taricNumber: "" },
        { description: "Extension cables", nameEs: "Cables de extensión", netWeight: 0.3, taricNumber: "85.36.90.85" },
        { description: "Fiber Gate Barriers", nameEs: "Vallas de fibra con puerta", netWeight: 20.0, taricNumber: "7019.90.00.20" },
        { description: "Flightcase", nameEs: "Maleta de transporte (flightcase)", netWeight: 30.0, taricNumber: "8518.40.30" },
        { description: "Foam Floor", nameEs: "Suelo de espuma", netWeight: 14.0, taricNumber: "3921.19.00.00" },
        { description: "Gloves", nameEs: "Guantes", netWeight: 0.2, taricNumber: "6116.10.20" },
        { description: "Grinding wheel sharpener", nameEs: "Afilador de muela", netWeight: 0.2, taricNumber: "6804.30" },
        { description: "Helmets", nameEs: "Cascos", netWeight: 0.6, taricNumber: "6506.10.10.00" },
        { description: "Hockey goal", nameEs: "Portería de hockey", netWeight: 4.0, taricNumber: "9506.91.90" },
        { description: "Horning stone", nameEs: "Piedra de pulido", netWeight: 0.1, taricNumber: "69.09.11.00" },
        { description: "Installation kit", nameEs: "Kit de instalación", netWeight: 4.5, taricNumber: "8206.00.00.00" },
        { description: "Kit unihockey", nameEs: "Kit de unihockey", netWeight: 5.0, taricNumber: "95.06.99" },
        { description: "Kit Xtraice Curling", nameEs: "Kit de curling Xtraice", netWeight: 1.5, taricNumber: "9506.91.90.00" },
        { description: "Lamas madera", nameEs: "Lamas de madera", netWeight: 250.0, taricNumber: "" },
        { description: "Lights boxes", nameEs: "Cajas de luces", netWeight: 4.0, taricNumber: "8536.00.00.00" },
        { description: "Liquid Lubricant 10L", nameEs: "Lubricante líquido 10L", netWeight: 10.0, taricNumber: "3403.99.00.10" },
        { description: "Liquid Lubricant 1L", nameEs: "Lubricante líquido 1L", netWeight: 1.0, taricNumber: "3403.99.00.10" },
        { description: "Liquido deslizante", nameEs: "Líquido deslizante", netWeight: 10.0, taricNumber: "3403.99.00.10" },
        { description: "Lite Panels", nameEs: "Paneles Lite", netWeight: 12.0, taricNumber: "3901.20.10.00" },
        { description: "Marco metálico", nameEs: "Marco metálico", netWeight: 30.0, taricNumber: "" },
        { description: "Marcos+lamas", nameEs: "Marcos con lamas", netWeight: 40.0, taricNumber: "" },
        { description: "Marcos+lamas", nameEs: "Marcos con lamas", netWeight: 60.0, taricNumber: "" },
        { description: "Microphone", nameEs: "Micrófono", netWeight: 0.3, taricNumber: "85.18.10" },
        { description: "Mop", nameEs: "Fregona", netWeight: 1.0, taricNumber: "3625.20.00" },
        { description: "Mopa", nameEs: "Mopa", netWeight: 1.0, taricNumber: "" },
        { description: "New Barriers Accesory", nameEs: "Accesorio nuevo de vallas", netWeight: 7.8, taricNumber: "73.06.61.99" },
        { description: "Olaf Skating Aid", nameEs: "Ayuda de patinaje Olaf", netWeight: 15.0, taricNumber: "9503.00.49.90" },
        { description: "Paneles tobogán", nameEs: "Paneles de tobogán", netWeight: 12.0, taricNumber: "3901.20.10.00" },
        { description: "Penguin Skating Aid", nameEs: "Ayuda de patinaje pingüino", netWeight: 12.0, taricNumber: "9503.00.00.90" },
        { description: "Plastic cap", nameEs: "Tapa de plástico", netWeight: 0.2, taricNumber: "3924.90.00.90" },
        { description: "Plastics Socks", nameEs: "Fundas plásticas", netWeight: 0.2, taricNumber: "6115.10.90" },
        { description: "Plexiglass Curved Barriers", nameEs: "Vallas curvas de metacrilato", netWeight: 15.0, taricNumber: "4202.99.00.90" },
        { description: "Plexiglass Gate Barriers", nameEs: "Vallas con puerta de metacrilato", netWeight: 15.0, taricNumber: "4202.99.00.90" },
        { description: "Plexiglass Straight Barriers", nameEs: "Vallas rectas de metacrilato", netWeight: 15.0, taricNumber: "4202.99.00.90" },
        { description: "Plugs Lite (500 units)", nameEs: "Tacos Lite (500 uds)", netWeight: 1.1, taricNumber: "3923.50.90.00" },
        { description: "Plugs PRO (500 units)", nameEs: "Tacos PRO (500 uds)", netWeight: 1.9, taricNumber: "3923.50.90.00" },
        { description: "Poster", nameEs: "Cartel", netWeight: 0.2, taricNumber: "4823200000" },
        { description: "Power strips", nameEs: "Regletas eléctricas", netWeight: 0.3, taricNumber: "85.36.90.85" },
        { description: "Pro panels", nameEs: "Paneles Pro", netWeight: 38.5, taricNumber: "3901.20.10.00" },
        { description: "Pro panels Cut", nameEs: "Paneles Pro cortados", netWeight: 19.0, taricNumber: "3901.20.10.00" },
        { description: "Pro ramp", nameEs: "Rampa Pro", netWeight: 28.7, taricNumber: "3901.20.10.00" },
        { description: "Pro Rem panels", nameEs: "Paneles Pro desmontables", netWeight: 34.0, taricNumber: "3901.20.10.00" },
        { description: "Pro Rem panels Cut", nameEs: "Paneles Pro desmontables cortados", netWeight: 25.0, taricNumber: "3901.20.10.00" },
        { description: "Protection Kit", nameEs: "Kit de protección", netWeight: 0.6, taricNumber: "9506.91.90.00" },
        { description: "Pulverizador", nameEs: "Pulverizador", netWeight: 1.2, taricNumber: "8424.81.10.00" },
        { description: "Raised floor access ramp", nameEs: "Rampa de acceso para suelo elevado", netWeight: 15.0, taricNumber: "" },
        { description: "Rubber floor roll", nameEs: "Rollo de suelo de caucho", netWeight: 81.0, taricNumber: "4016.91.00.00" },
        { description: "Separadores", nameEs: "Separadores", netWeight: 3.0, taricNumber: "" },
        { description: "Sharpener machine", nameEs: "Máquina afiladora", netWeight: 16.0, taricNumber: "8460.31.00.80" },
        { description: "Silver Alum. Gate Barriers", nameEs: "Vallas con puerta de aluminio plateado", netWeight: 20.0, taricNumber: "7610.90.00.80" },
        { description: "Silver Alum. Gate-Wooden Barriers", nameEs: "Vallas con puerta aluminio y madera", netWeight: 20.0, taricNumber: "3925.20.00" },
        { description: "Skate aid chairs", nameEs: "Sillas de ayuda al patinaje", netWeight: 13.0, taricNumber: "9506.91.00.30" },
        { description: "Skates C", nameEs: "Patines C", netWeight: 3.0, taricNumber: "9506.70.40.00" },
        { description: "Skates foam inserts", nameEs: "Inserciones de espuma para patines", netWeight: 0.1, taricNumber: "3925.90.00.00" },
        { description: "Skates shelves", nameEs: "Estanterías para patines", netWeight: 40.0, taricNumber: "9403.20.00.86" },
        { description: "Skates X", nameEs: "Patines X", netWeight: 3.0, taricNumber: "9506.70.40.00" },
        { description: "Sledge", nameEs: "Trineo", netWeight: 3.0, taricNumber: "9506.90.01" },
        { description: "Speakers", nameEs: "Altavoces", netWeight: 8.0, taricNumber: "85.18.21.00" },
        { description: "Special Silver Alum-Wooden Barriers", nameEs: "Vallas especiales aluminio-madera plateadas", netWeight: 18.0, taricNumber: "3925.20.00" },
        { description: "Special Silver Alum. Barriers", nameEs: "Vallas especiales de aluminio plateado", netWeight: 18.0, taricNumber: "7610.90.00.80" },
        { description: "Special Silver Alum. Gate Barriers", nameEs: "Vallas con puerta especiales aluminio plateado", netWeight: 18.0, taricNumber: "7610.90.00.80" },
        { description: "Special Silver Fiber Barriers", nameEs: "Vallas especiales de fibra plateada", netWeight: 18.0, taricNumber: "7019.90.00.20" },
        { description: "Squeegee", nameEs: "Racleta", netWeight: 1.0, taricNumber: "3625.20.00" },
        { description: "Squirrel Skating Aid", nameEs: "Ayuda de patinaje ardilla", netWeight: 13.0, taricNumber: "9503.00.49.90" },
        { description: "Straight Fiber Barriers", nameEs: "Vallas rectas de fibra", netWeight: 20.0, taricNumber: "7019.90.00.20" },
        { description: "Straight Silver Alum. Barriers", nameEs: "Vallas rectas de aluminio plateado", netWeight: 20.0, taricNumber: "7610.90.00.80" },
        { description: "Straight Silver Alum.-Wooden Barriers", nameEs: "Vallas rectas aluminio-madera plateadas", netWeight: 20.0, taricNumber: "3925.20.00" },
        { description: "Suelo alveolar", nameEs: "Suelo alveolar", netWeight: 1.0, taricNumber: "" },
        { description: "SuitCase", nameEs: "Maleta", netWeight: 20.0, taricNumber: "" },
        { description: "Support speakers", nameEs: "Soportes para altavoces", netWeight: 0.5, taricNumber: "85.18.21.00" },
        { description: "Target Curling", nameEs: "Diana de curling", netWeight: 70.0, taricNumber: "3901.20.10.00" },
        { description: "Tiras Paneles tobogán", nameEs: "Tiras de paneles de tobogán", netWeight: 1.2, taricNumber: "3901.20.10.00" },
        { description: "Trineos", nameEs: "Trineos", netWeight: 5.0, taricNumber: "" },
        { description: "Vacuum", nameEs: "Aspiradora", netWeight: 11.0, taricNumber: "8508.11.00" },
        { description: "Vallas madera clásica", nameEs: "Vallas de madera clásica", netWeight: 2.0, taricNumber: "" },
        { description: "Wooden house 10m2", nameEs: "Casa de madera 10m²", netWeight: 1200.0, taricNumber: "94.03.30.91" },
        { description: "Wooden house small 4m2", nameEs: "Caseta de madera pequeña 4m²", netWeight: 326.0, taricNumber: "94.03.30.91" },
        { description: "XLR Connect", nameEs: "Conector XLR", netWeight: 0.2, taricNumber: "85.44.49" },
        { description: "Xtraice Cleaning solution", nameEs: "Líquido limpiador Xtraice", netWeight: 10.0, taricNumber: "3402.90.10" },
        { description: "Xtraice Daily Clenaning liquid", nameEs: "Líquido de limpieza diaria Xtraice", netWeight: 5.0, taricNumber: "3402.90.10" }  
]; */

let materiales = [];

const productAliases = {
    A00485: { description: 'Skates C', nameEs: 'Patin C' },
    A00005: { description: 'Pro panels', nameEs: 'Paneles Pro' },
    A00006: { description: 'Plugs PRO (500 units)', nameEs: '500 Tapones PRO' },
    A00078: { description: 'Skates shelves', nameEs: 'Patineros' },
    A00080: { description: 'Vacuum', nameEs: 'Aspiradora' },
    A00082: { description: 'Rubber floor roll', nameEs: 'Suelo de caucho rollo' },
    A00088: { description: 'Foam Floor', nameEs: 'Suelo de espuma' },
    A00089: { description: 'Installation kit', nameEs: 'Kit de Instalación' },
    A00090: { description: 'Cleaning Machine 220v', nameEs: 'Máquina de limpieza 220v' },
    A00364: { description: 'Double Xtraice Sharpener Machine', nameEs: 'Afiladora doble Xtraice 220V' },
    A00447: { description: 'Mopa', nameEs: 'Mopa' },
    A00448: { description: 'Squeegee', nameEs: 'Racleta agua (Haragán)' },
    A00461: { description: 'Bars for plug disassembly', nameEs: 'Barras para desmontaje tapones' },
    A00482: { description: 'disassembly pack', nameEs: 'Pack desmontaje para 100m2' },
    A00508: { description: 'Kit No Fix 4700 mm', nameEs: 'Kit no fijación (metro lineal)' }
};

function parseProductCsvLine(line) {
    const fields = [];
    let field = '';
    let quoted = false;
    for (let index = 0; index < line.length; index++) {
        const character = line[index];
        if (character === '"') {
            if (quoted && line[index + 1] === '"') {
                field += '"';
                index++;
            } else {
                quoted = !quoted;
            }
        } else if (character === ',' && !quoted) {
                fields.push(field.trim());
        } else {
            field += character;
        }
    }
    fields.push(field.trim());
    return fields;
}

function parseProductCatalog(csvText) {
    const lines = csvText.split(/\r?\n/).filter(line => line.trim());
    const headers = parseProductCsvLine(lines[0]);
    const referenceIndex = headers.indexOf('Referencia interna');
    const nameIndex = headers.indexOf('Nombre');
    const typeIndex = headers.indexOf('Tipo');
    const weightIndex = headers.indexOf('Peso Kg');
    const palletTypeIndex = headers.indexOf('Tipo pallet');
    const palletDimensionsIndex = headers.indexOf('Medida pallet');
    const taricIndex = headers.indexOf('TARIC (HS)');
    const englishNameIndex = headers.indexOf('Nombre EN-US');

    return lines.slice(1).map(line => {
        const row = parseProductCsvLine(line);
        const name = row[nameIndex] || '';
        const reference = row[referenceIndex] || '';
        const type = row[typeIndex] || '';
        const weight = row[weightIndex] || '';
        const alias = productAliases[reference] || {};
        const warehouseAlias = warehouseReferenceMap[reference] || {};
        const normalizedWeight = (weight || '').includes(',')
            ? (weight || '').replace(/\./g, '').replace(',', '.')
            : (weight || '');
        const parsedWeight = Number(normalizedWeight) || 0;
        return {
            description: alias.description || warehouseAlias.description || name,
            nameEs: alias.nameEs || warehouseAlias.displayName || name,
            nameEn: alias.description || warehouseAlias.description || name,
            reference,
            productType: type,
            palletType: row[palletTypeIndex] || '',
            palletDimensions: row[palletDimensionsIndex] || '',
            netWeight: parsedWeight,
            taricNumber: row[taricIndex] || '',
            nameEnFromFile: row[englishNameIndex] || ''
        };
    }).filter(material => material.description && material.productType !== 'service')
        .map(material => ({
            ...material,
            nameEn: material.nameEnFromFile || material.nameEn
        }));
}

async function loadProductCatalog() {
    const response = await fetch('Productos_Odoo.txt');
    if (!response.ok) throw new Error(`No se pudo cargar Productos_Odoo.txt (${response.status})`);
    materiales = parseProductCatalog(await response.text());
}


let data = [];
let lastUsedPalletNumber = 0; // Control de numeración de pallets
const workingDataStorageKey = 'xtraiceWorkingPackingList';

function persistWorkingData() {
    sessionStorage.setItem(workingDataStorageKey, JSON.stringify({
        pallets: data,
        lastUsedPalletNumber
    }));
}

function restoreWorkingData() {
    const savedWorkingData = sessionStorage.getItem(workingDataStorageKey);
    if (!savedWorkingData) return;

    try {
        const parsedData = JSON.parse(savedWorkingData);
        if (Array.isArray(parsedData.pallets)) {
            data = parsedData.pallets;
            lastUsedPalletNumber = parsedData.lastUsedPalletNumber || 0;
        }
    } catch (error) {
        sessionStorage.removeItem(workingDataStorageKey);
    }
}

const warehouseReferenceMap = {
    A00005: { description: "Pro panels" },
    A00006: { description: "Plugs PRO (500 units)" },
    A00042: { description: "Straight Silver Alum. Barriers", barrierType: "straight" },
    A00043: { description: "Special Silver Alum. Barriers", barrierType: "special" },
    A00044: { description: "Curved Silver Alum. Barriers", barrierType: "curve" },
    A00449: { description: "Curved Silver Alum. Barriers", barrierType: "curve" },
    A00045: { description: "Silver Alum. Gate Barriers", barrierType: "straight" },
    A00477: { description: "Special Silver Alum. Gate Barriers", barrierType: "special" },
    A00137: { description: "New Barriers Accesory", displayName: "Pie de valla alu" },
    A00284: { description: "New Barriers Accesory", displayName: "Pie de valla alu" },
    A00078: { description: "Skates shelves" },
    A00364: { description: "Double Xtraice Sharpener Machine" },
    A00080: { description: "Vacuum" },
    A00082: { description: "Rubber floor roll" },
    A00086: { description: "Antibacterial spray" },
    A00088: { description: "Foam Floor" },
    A00089: { description: "Installation kit" },
    A00090: { description: "Cleaning Machine 220v" },
    A00447: { description: "Mopa" },
    A00448: { description: "Squeegee" },
    A00482: { description: "disassembly pack" },
    A00461: { description: "Bars for plug disassembly" },
    A00508: { description: "Kit No Fix 4700 mm" },
    A00153: { description: "Skates C", skateSize: 25 },
    A00154: { description: "Skates C", skateSize: 26 },
    A00155: { description: "Skates C", skateSize: 27 },
    A00156: { description: "Skates C", skateSize: 28 },
    A00157: { description: "Skates C", skateSize: 29 },
    A00158: { description: "Skates C", skateSize: 30 },
    A00159: { description: "Skates C", skateSize: 31 },
    A00160: { description: "Skates C", skateSize: 32 },
    A00161: { description: "Skates C", skateSize: 33 },
    A00162: { description: "Skates C", skateSize: 34 },
    A00163: { description: "Skates C", skateSize: 35 },
    A00164: { description: "Skates C", skateSize: 36 },
    A00165: { description: "Skates C", skateSize: 37 },
    A00166: { description: "Skates C", skateSize: 38 },
    A00167: { description: "Skates C", skateSize: 39 },
    A00168: { description: "Skates C", skateSize: 40 },
    A00169: { description: "Skates C", skateSize: 41 },
    A00170: { description: "Skates C", skateSize: 42 },
    A00171: { description: "Skates C", skateSize: 43 },
    A00172: { description: "Skates C", skateSize: 44 },
    A00173: { description: "Skates C", skateSize: 45 },
    A00174: { description: "Skates C", skateSize: 46 },
    A00175: { description: "Skates C", skateSize: 47 }
};

function warehouseMaterial(record) {
    const mapped = warehouseReferenceMap[record.reference] || {};
    const material = materiales.find(item => item.reference === record.reference) ||
        materiales.find(item => item.description === mapped.description);
    const barrierType = mapped.barrierType || inferWarehouseBarrierType(record.product);
    const fallbackReference = record.reference === 'A00477' ? 'A00043' :
        (barrierType ? 'A00042' : '');
    const fallbackMaterial = fallbackReference
        ? materiales.find(item => item.reference === fallbackReference)
        : null;
    return {
        ...record,
        ...mapped,
        barrierType,
        description: material?.description || mapped.description || record.product,
        nameEs: mapped.displayName || (mapped.skateSize ? `Patines C talla ${mapped.skateSize}` : (material?.nameEs || record.product)),
        nameEn: material?.nameEn || material?.description || record.product,
        productType: material?.productType || record.productType || '',
        palletType: material?.palletType || record.palletType || '',
        palletDimensions: material?.palletDimensions || record.palletDimensions || '',
        netWeightUnit: material?.netWeight || fallbackMaterial?.netWeight || 0,
        taric: material?.taricNumber || ''
    };
}

function inferWarehouseBarrierType(productName = '') {
    const name = productName.toLocaleLowerCase();
    if (!/^vallas?\b/.test(name) || /\b(?:pie|panel|par|vinilo)\b/.test(name)) return '';
    if (/curv/.test(name)) return 'curve';
    if (/especial/.test(name)) return 'special';
    return 'straight';
}

function warehouseItem(material, units) {
    const catalogMaterial = material.reference
        ? materiales.find(item => item.reference === material.reference)
        : null;
    const rawWeight = material.netWeightUnit || material.netWeight || catalogMaterial?.netWeight || 0;
    const netWeightUnit = Number(String(rawWeight).replace(',', '.')) || 0;
    return {
        id: `item-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
        description: material.description,
        nameEs: material.nameEs,
        nameEn: material.nameEn,
        units,
        netWeightUnit,
        totalWeight: Number((netWeightUnit * units).toFixed(2)),
        taric: material.taric
    };
}

function warehousePallet(items, dimensions, stackable = 'NOT', grossWeight = 15) {
    const pallet = {
        id: `pallet-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
        palletNum: 0,
        grossWeight,
        netWeight: items.reduce((sum, item) => sum + item.totalWeight, 0),
        dimX: dimensions[0],
        dimY: dimensions[1],
        dimZ: dimensions[2],
        bulk: 0,
        stackable,
        unitsPallet: 1,
        items
    };
    pallet.bulk = Number((pallet.dimX * pallet.dimY * pallet.dimZ).toFixed(2));
    return pallet;
}

function splitWarehouseQuantity(total, regularLimit, remainderLimit = regularLimit) {
    const quantities = [];
    let remaining = total;
    while (remaining > remainderLimit) {
        quantities.push(regularLimit);
        remaining -= regularLimit;
    }
    if (remaining > 0) quantities.push(remaining);
    return quantities;
}

function addWarehouseQuantityPallets(pallets, records, limit, dimensions, options = {}) {
    records.forEach(record => {
        splitWarehouseQuantity(record.quantity, limit, options.remainderLimit || limit).forEach(units => {
            pallets.push(warehousePallet([warehouseItem(record, units)], dimensions, options.stackable || 'NOT', options.grossWeight || 15));
        });
    });
}

function addWarehouseBarrierPallets(pallets, records) {
    const nonCurves = records.filter(record => record.barrierType !== 'curve');
    const curves = records.filter(record => record.barrierType === 'curve');
    let nonCurveUnits = nonCurves.reduce((sum, record) => sum + record.quantity, 0);
    let curveUnits = curves.reduce((sum, record) => sum + record.quantity, 0);
    let nonCurveIndex = 0;
    let curveIndex = 0;
    let nonCurveRemaining = nonCurves[0]?.quantity || 0;
    let curveRemaining = curves[0]?.quantity || 0;

    while (nonCurveUnits > 0) {
        const items = [];
        let space = Math.min(20, nonCurveUnits);
        while (space > 0 && nonCurveIndex < nonCurves.length) {
            const record = nonCurves[nonCurveIndex];
            const units = Math.min(space, nonCurveRemaining);
            items.push(warehouseItem(record, units));
            space -= units;
            nonCurveUnits -= units;
            nonCurveRemaining -= units;
            if (nonCurveRemaining === 0) {
                nonCurveIndex++;
                nonCurveRemaining = nonCurves[nonCurveIndex]?.quantity || 0;
            }
        }

        let curveSpace = Math.min(4, curveUnits);
        while (curveSpace > 0 && curveIndex < curves.length) {
            const record = curves[curveIndex];
            const units = Math.min(curveSpace, curveRemaining);
            items.push(warehouseItem(record, units));
            curveSpace -= units;
            curveUnits -= units;
            curveRemaining -= units;
            if (curveRemaining === 0) {
                curveIndex++;
                curveRemaining = curves[curveIndex]?.quantity || 0;
            }
        }
        pallets.push(warehousePallet(items, [2, 1.2, 1.7]));
    }

    while (curveUnits > 0) {
        const units = Math.min(4, curveUnits);
        const record = curves[curveIndex];
        pallets.push(warehousePallet([warehouseItem(record, units)], [2, 1.2, 1.2]));
        curveUnits -= units;
        curveRemaining -= units;
        if (curveRemaining <= 0) {
            curveIndex++;
            curveRemaining = curves[curveIndex]?.quantity || 0;
        }
    }
}

const warehouseServiceReferences = new Set([
    'A00258', 'A00117', 'A00111', 'A00112', 'A00113', 'A00114', 'A00600'
]);

function isWarehouseService(record) {
    return record.productType === 'service' ||
        warehouseServiceReferences.has(record.reference) ||
        /\b(?:montaje|desmontaje|alquiler|transporte|supervisi[oó]n|carga|descarga)\b/i.test(record.product);
}

function isWarehouseToboggan(record) {
    return /tobog[aá]n/i.test(record.product) || /tobog[aá]n/i.test(record.nameEs || '');
}

function createWarehousePallets(records) {
    records = records.filter(record => !isWarehouseService(record) && !isWarehouseToboggan(record));
    const pallets = [];
    const panels = records.filter(record => record.reference === 'A00005');
    const barriers = records.filter(record => record.barrierType);
    const skates = records.filter(record => record.skateSize);
    const rubber = records.filter(record => record.reference === 'A00082');
    const patineros = records.filter(record => record.reference === 'A00078');
    const foam = records.filter(record => record.reference === 'A00088');
    const feet = records.filter(record => record.reference === 'A00137' || record.reference === 'A00284');
    const accessories = records.filter(record => !panels.includes(record) && !barriers.includes(record) &&
        !skates.includes(record) && !rubber.includes(record) && !patineros.includes(record) &&
        !foam.includes(record) && !feet.includes(record));

    addWarehouseQuantityPallets(pallets, panels, 25, [2, 1, 0.65], { remainderLimit: 30, stackable: 'YES' });
    addWarehouseBarrierPallets(pallets, barriers);
    addWarehouseQuantityPallets(pallets, patineros, 10, [1.6, 0.85, 0.84]);
    if (feet.length) {
        const feetMaterial = { ...feet[0], quantity: feet.reduce((sum, record) => sum + record.quantity, 0) };
        addWarehouseQuantityPallets(pallets, [feetMaterial], 100, [1.2, 1.1, 0.8]);
    }
    if (foam.length) {
        const foamMaterial = { ...foam[0], quantity: foam.reduce((sum, record) => sum + record.quantity, 0) };
        pallets.push(warehousePallet([warehouseItem(foamMaterial, foamMaterial.quantity)], [1.22, 0.8, 0.8]));
    }

    const totalSkates = skates.reduce((sum, record) => sum + record.quantity, 0);
    const skateBatches = [];
    let remainingSkates = totalSkates;
    if (remainingSkates > 0 && remainingSkates <= 80) {
        skateBatches.push(remainingSkates);
    } else if (remainingSkates > 80) {
        while (remainingSkates >= 60) {
            skateBatches.push(60);
            remainingSkates -= 60;
        }
        if (remainingSkates > 0 && remainingSkates < 20) {
            skateBatches[skateBatches.length - 1] += remainingSkates;
        } else if (remainingSkates > 0) {
            skateBatches.push(remainingSkates);
        }
    }
    skateBatches.forEach(batchSize => {
        const skateProduct = {
                ...(materiales.find(material => material.reference === 'A00485') || skates[0]),
            description: 'Skates C',
            nameEs: 'Patin C',
            nameEn: 'Skates C'
        };
        const items = [warehouseItem(skateProduct, batchSize)];
        pallets.push(warehousePallet(items, [1, 1, 1.4]));
    });

    if (accessories.length) {
        pallets.push(warehousePallet(accessories.map(record => warehouseItem(record, record.quantity)), [1, 1, 1.5]));
    }
    return pallets;
}

async function extractWarehouseOrder(file) {
    if (!window.pdfjsLib) throw new Error('No se pudo cargar el lector PDF. Comprueba la conexión a Internet.');
    const pdf = await pdfjsLib.getDocument({ data: await file.arrayBuffer() }).promise;
    const records = [];
    const documentLines = [];
    for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber++) {
        const page = await pdf.getPage(pageNumber);
        const content = await page.getTextContent();
        const lines = {};
        content.items.forEach(item => {
            const y = Math.round(item.transform[5]);
            lines[y] = `${lines[y] || ''} ${item.str}`.trim();
        });
        const orderedLines = Object.keys(lines).sort((a, b) => b - a).map(y => lines[y]);
        documentLines.push(...orderedLines);
        orderedLines.forEach(line => {
            const match = line.match(/^(\d+)\s+(A\d{5})\s+\[A\d{5}\]\s*(.*)$/);
            if (match) {
                records.push({
                    quantity: Number(match[1]),
                    reference: match[2],
                    product: match[3].trim()
                });
                return;
            }

            const legacyMatch = line.match(/^(\d+)\s+(A\d{5})\s+(.+?)\s+(?:Usado|Nuevo)\s*$/);
            if (legacyMatch) {
                records.push({
                    quantity: Number(legacyMatch[1]),
                    reference: legacyMatch[2],
                    product: legacyMatch[3].trim()
                });
            }
        });
    }
    const documentText = documentLines.join('\n');
    const clientMatch = documentText.match(/Cliente:\s*(.+?)(?=\s+Pedido\s*\/\s*Presupuesto\s*:|\n|$)/i);
    const orderDateMatch = documentText.match(/Fecha del pedido:\s*(\d{2}\/\d{2}\/\d{4})/i);

    return {
        records: records.filter(record => record.quantity > 0).map(warehouseMaterial),
        client: clientMatch?.[1]?.trim() || '',
        orderDate: orderDateMatch?.[1] || ''
    };
}

async function importWarehouseOrder(event) {
    const file = event.target.files[0];
    event.target.value = '';
    if (!file) return;
    try {
        const order = await extractWarehouseOrder(file);
        const records = order.records;
        if (!records.length) throw new Error('No se encontraron líneas de materiales');
        if (data.length && !confirm('Se reemplazarán los palets actuales por los del pedido. ¿Continuar?')) return;
        data = createWarehousePallets(records);
        data.forEach((pallet, index) => pallet.palletNum = index + 1);
        lastUsedPalletNumber = data.length;
        const orderNumber = file.name.match(/S\d+/i)?.[0] || '';
        if (orderNumber) document.getElementById('invoiceNumber').value = orderNumber;
        if (order.client) document.getElementById('consigneeAddress').value = order.client;
        if (order.orderDate) {
            const [day, month, year] = order.orderDate.split('/');
            document.getElementById('invoiceDate').value = `${year}-${month}-${day}`;
        }
        renderTable();
        alert(`Pedido cargado: ${records.length} líneas y ${data.length} palets generados.`);
        if (records.some(isWarehouseToboggan)) {
            alert('el producto TOBOGAN no se paletiza de forma automática, ten en cuenta que ocupa entre el 60/70% de un camion trailer');
        }
    } catch (error) {
        console.error(error);
        alert(`No se pudo leer el pedido PDF: ${error.message}`);
    }
}

// ======================
// FUNCIONES PRINCIPALES
// ======================

function getNextPalletNumber() {
    if (data.length === 0) return 1;
    return data.reduce((acc, p) => acc + p.unitsPallet, 0) + 1;
}

function addPallet() {
    const newPalletNumber = getNextPalletNumber();
    
    const newPallet = {
        id: `pallet-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
        palletNum: newPalletNumber,
        grossWeight: 0,
        netWeight: 0,
        dimX: 1.00,
        dimY: 1.00,
        dimZ: 1.00,
        bulk: 0, // Inicializado como número
        stackable: 'YES',
        unitsPallet: 1,
        items: []
    };
    
    data.unshift(newPallet);
    lastUsedPalletNumber = newPalletNumber;
    renderTable();
}

function abrirModalProductoPersonalizado() {
    const modal = document.getElementById("modalProductoPersonalizado");
    const select = document.getElementById("customPalletSelect");

    select.innerHTML = "";

    if (data.length === 0) {
        const opt = document.createElement("option");
        opt.value = "nuevo";
        opt.textContent = "⚠️ No hay pallets (crear uno nuevo)";
        select.appendChild(opt);
    } else {
        data.forEach(p => {
            const opt = document.createElement("option");
            opt.value = p.id;
            opt.textContent = `Pallet nº ${p.palletNum}`;
            select.appendChild(opt);
        });
    }

    modal.style.display = "block";
}

function cerrarModalProductoPersonalizado() {
    document.getElementById("modalProductoPersonalizado").style.display = "none";
}

function guardarProductoPersonalizado() {
    const description = document.getElementById("customDescription").value.trim();
    const nameEN = document.getElementById("customNameEN").value.trim();
    const netWeight = parseFloat(document.getElementById("customNetWeight").value);
    const units = parseInt(document.getElementById("customUnits").value);
    const taric = document.getElementById("customTaric").value.trim();
    const palletId = document.getElementById("customPalletSelect").value;

    if (!description || isNaN(netWeight) || isNaN(units) || !taric) {
        alert("Por favor, rellena todos los campos correctamente.");
        return;
    }

    const item = {
        id: `item-${Date.now()}`,
        description: description,
        nameEs: description,
        nameEn: nameEN || description, // fallback
        netWeightUnit: netWeight,
        units: units,
        totalWeight: netWeight * units,
        taric: taric
    };

    if (palletId === "nuevo") {
        const newPallet = {
            id: `pallet-${Date.now()}`,
            palletNum: getNextPalletNumber(),
            grossWeight: 15,
            netWeight: item.totalWeight,
            dimX: 1.00,
            dimY: 1.00,
            dimZ: 1.00,
            bulk: 0,
            stackable: 'NOT',
            unitsPallet: 1,
            items: [item]
        };
        calculateBulk(newPallet);
        data.unshift(newPallet);
        lastUsedPalletNumber = newPallet.palletNum;
    } else {
        const pallet = data.find(p => p.id === palletId);
        if (pallet) {
            pallet.items.push(item);
            pallet.netWeight += item.totalWeight;
            calculateBulk(pallet);
        }
    }

    cerrarModalProductoPersonalizado();
    renderTable();
}

function addPalletProPanels() {
    const material = materiales.find(m => m.reference === 'A00005') || {
        reference: 'A00005',
        description: 'Panel Pro Xtraice',
        nameEs: 'Panel Pro Xtraice',
        netWeight: 36.5,
        taricNumber: '3901.20.10.00'
    };

    const units = 25;
    const newItem = {
        id: `item-${Date.now()}-1`,
        description: material.description,
        nameEs: material.nameEs,
        units: units,
        netWeightUnit: material.netWeight,
        totalWeight: material.netWeight * units,
        taric: material.taricNumber
    };

    const newPallet = {
        id: `pallet-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
        palletNum: getNextPalletNumber(),
        grossWeight: 15,
        netWeight: newItem.totalWeight,
        dimX: 2.00,
        dimY: 1.00,
        dimZ: 0.65,
        bulk: 0,
        stackable: 'YES',
        unitsPallet: 1,
        items: [newItem]
    };

    calculateBulk(newPallet);
    data.unshift(newPallet);
    lastUsedPalletNumber = newPallet.palletNum;
    renderTable();
}

function addItem(palletId) {
    const pallet = data.find(p => p.id === palletId);
    const newItem = {
        id: `item-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
        description: "",
        units: "",
        netWeightUnit: 0,
        totalWeight: 0,
        taric: ""
    };
    pallet.items.push(newItem);
    renderTable();
}

function deleteRow(id) {
    if (id.startsWith('pallet') && !confirm(`¿Eliminar pallet ${data.find(p => p.id === id)?.palletNum}?`)) return;
    
    if(id.startsWith('pallet')) {
        data = data.filter(p => p.id !== id);
    } else {
        data.forEach(pallet => {
            pallet.items = pallet.items.filter(item => item.id !== id);
        });
    }
    renderTable();
}

function addPalletPatines() {
    const material = materiales.find(m => m.description === 'PATIN C' && !m.reference);
    const fallbackWeight = materiales.find(m => m.reference === 'A00485')?.netWeight || 0;

    if (!material) {
        alert("Material 'PATIN C' genérico no encontrado en la lista.");
        return;
    }

    const newItem = {
        id: `item-${Date.now()}-1`,
        description: material.description,
        nameEs: material.nameEs,
        units: 60,
        netWeightUnit: material.netWeight || fallbackWeight,
        totalWeight: (material.netWeight || fallbackWeight) * 60,
        taric: material.taricNumber
    };

    const newPallet = {
        id: `pallet-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
        palletNum: getNextPalletNumber(),
        grossWeight: 15,
        netWeight: newItem.totalWeight,
        dimX: 1.00,
        dimY: 1.00,
        dimZ: 1.40,
        bulk: 0,
        stackable: 'NOT',
        unitsPallet: 1,
        items: [newItem]
    };

    calculateBulk(newPallet);
    data.unshift(newPallet);
    lastUsedPalletNumber = newPallet.palletNum;
    renderTable();
}

function addPalletFoam() {
    const material = materiales.find(m => m.reference === 'A00088') || {
        reference: 'A00088',
        description: 'Suelo de espuma',
        nameEs: 'Suelo de espuma',
        netWeight: 14,
        taricNumber: '3921.19.00.00'
    };

    const newItem = {
        id: `item-${Date.now()}-1`,
        description: material.description,
        nameEs: material.nameEs,
        units: 3,
        netWeightUnit: material.netWeight,
        totalWeight: material.netWeight * 3,
        taric: material.taricNumber
    };

    const newPallet = {
        id: `pallet-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
        palletNum: getNextPalletNumber(),
        grossWeight: 0,
        netWeight: newItem.totalWeight,
        dimX: 1.22,
        dimY: 0.80,
        dimZ: 0.80,
        bulk: 0.78,
        stackable: 'NOT',
        unitsPallet: 1,
        items: [newItem]
    };

    calculateBulk(newPallet);
    data.unshift(newPallet);
    lastUsedPalletNumber = newPallet.palletNum;
    renderTable();
}


function addPalletPatineros() {
    const material = materiales.find(m => m.reference === 'A00078') || {
        reference: 'A00078',
        description: 'Patineros',
        nameEs: 'Patineros',
        netWeight: 40,
        taricNumber: '9403.20.00.86'
    };

    const newItem = {
        id: `item-${Date.now()}-2`,
        description: material.description,
        nameEs: material.nameEs,
        units: 2,
        netWeightUnit: material.netWeight,
        totalWeight: material.netWeight * 2,
        taric: material.taricNumber
    };

    const newPallet = {
        id: `pallet-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
        palletNum: getNextPalletNumber(),
        grossWeight: 15,
        netWeight: newItem.totalWeight,
        dimX: 1.60,
        dimY: 0.85,
        dimZ: 0.84,
        bulk: 0,
        stackable: 'NOT',
        unitsPallet: 1,
        items: [newItem]
    };

    calculateBulk(newPallet);
    data.unshift(newPallet);
    lastUsedPalletNumber = newPallet.palletNum;
    renderTable();
}

function addPalletAccesorios() {
    const newPalletNumber = getNextPalletNumber();

    const sharpener = materiales.find(m => m.reference === 'A00364') || {
        reference: 'A00364',
        description: 'Double Xtraice Sharpener Machine',
        nameEs: 'Afiladora doble Xtraice 220V',
        netWeight: 38,
        taricNumber: '8460.31.00.00'
    };
    const vacuum = materiales.find(m => m.reference === 'A00080') || {
        reference: 'A00080',
        description: 'Vacuum',
        nameEs: 'Aspiradora',
        netWeight: 11,
        taricNumber: '8508.11.00'
    };

    const newPallet = {
        id: `pallet-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
        palletNum: newPalletNumber,
        grossWeight: 15,
        netWeight: 0, // se calcula luego
        dimX: 1.00,
        dimY: 1.00,
        dimZ: 1.50,
        bulk: 0,
        stackable: 'NOT',
        unitsPallet: 1,
        items: [
            {
                id: `item-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
                description: sharpener.description,
                nameEs: sharpener.nameEs,
                units: 1,
                netWeightUnit: sharpener.netWeight,
                totalWeight: sharpener.netWeight,
                taric: sharpener.taricNumber
            },
            {
                id: `item-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
                description: vacuum.description,
                nameEs: vacuum.nameEs,
                units: 1,
                netWeightUnit: vacuum.netWeight,
                totalWeight: vacuum.netWeight,
                taric: vacuum.taricNumber
            }
        ]
    };

    newPallet.netWeight = newPallet.items.reduce((sum, item) => sum + item.totalWeight, 0);
    data.unshift(newPallet);
    lastUsedPalletNumber = newPallet.palletNum;
    renderTable();
}

function addPalletPiesDeValla() {
    const material = materiales.find(m => m.reference === 'A00284') || {
        reference: 'A00284',
        description: 'Nuevo pie de valla (con tornapunta)',
        nameEs: 'Nuevo pie de valla (con tornapunta)',
        netWeight: 7.8,
        taricNumber: '73.06.61.99'
    };

    const newItem = {
        id: `item-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
        description: material.description,
        nameEs: material.nameEs,
        units: 20,
        netWeightUnit: material.netWeight,
        totalWeight: material.netWeight * 20,
        taric: material.taricNumber
    };

    const newPallet = {
        id: `pallet-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
        palletNum: getNextPalletNumber(),
        grossWeight: 15,
        netWeight: newItem.totalWeight,
        dimX: 1.20,
        dimY: 1.10,
        dimZ: 0.80,
        bulk: 0,
        stackable: 'NOT',
        unitsPallet: 1,
        items: [newItem]
    };

    calculateBulk(newPallet);
    data.unshift(newPallet);
    lastUsedPalletNumber = newPallet.palletNum;
    renderTable();
}

function addPalletAlumBarriers() {
    const materialesRequeridos = [
        { reference: 'A00044', nameEs: 'Valla alu curva', units: 4 },
        { reference: 'A00043', nameEs: 'Valla alu especial', units: 4 },
        { reference: 'A00045', nameEs: 'Valla alu puerta', units: 1 },
        { reference: 'A00477', nameEs: 'Valla alu especial puerta', units: 1 },
        { reference: 'A00042', nameEs: 'Valla alu recta', units: 19 }
    ];

    const items = materialesRequeridos.map((m, index) => {
        const mat = materiales.find(material => material.reference === m.reference);
        const fallbackMaterial = materiales.find(material => material.reference === (m.reference === 'A00477' ? 'A00043' : 'A00042'));
        const fallbackWeight = mat?.netWeight || fallbackMaterial?.netWeight || 20;
        return {
            id: `item-${Date.now()}-${index}`,
            description: mat?.description || m.nameEs,
            nameEs: mat?.nameEs || m.nameEs,
            units: m.units,
            netWeightUnit: fallbackWeight,
            totalWeight: fallbackWeight * m.units,
            taric: mat?.taricNumber || ''
        };
    });

    const totalNetWeight = items.reduce((sum, item) => sum + item.totalWeight, 0);

    const newPallet = {
        id: `pallet-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
        palletNum: getNextPalletNumber(),
        grossWeight: 15,
        netWeight: totalNetWeight,
        dimX: 2.00,
        dimY: 1.20,
        dimZ: 1.70,
        bulk: 0,
        stackable: 'NOT',
        unitsPallet: 1,
        items: items
    };

    calculateBulk(newPallet);
    data.unshift(newPallet);
    lastUsedPalletNumber = newPallet.palletNum;
    renderTable();
}

// ======================
// RENDERIZADO
// ======================

function restoreTableScroll(scrollY) {
    window.scrollTo(0, scrollY);
    requestAnimationFrame(() => window.scrollTo(0, scrollY));
}

function renderTable() {
    const scrollY = window.scrollY;
    persistWorkingData();
    const factor = unidadPeso === 'LB' ? 2.20462 : 1;
    const weightUnit = unidadPeso === 'LB' ? 'lb' : 'kg';
    const volumeFactor = unidadPeso === 'LB' ? 35.3147 : 1;
    const volumeUnit = unidadPeso === 'LB' ? 'ft³' : 'm³';

    const tbody = document.getElementById('tableBody');
    tbody.querySelectorAll('.dynamic-row').forEach(row => row.remove());

    const emptyMessage = document.getElementById('emptyMessage');
    if (data.length === 0) {
        emptyMessage.style.display = "block";
        restoreTableScroll(scrollY);
        return;
    } else {
        emptyMessage.style.display = "none";
    }

    [...data].slice().reverse().forEach(pallet => {
        // 1. Fila Pallet
        const palletRow = document.createElement('tr');
        palletRow.className = 'dynamic-row pallet-row';
        palletRow.classList.add(`pallet-group-${pallet.palletNum}`);
        palletRow.dataset.id = pallet.id;
        palletRow.innerHTML = `
            <td><input type="number" value="${pallet.palletNum}" 
                onchange="updatePallet('${pallet.id}', 'palletNum', this.value)"></td>
            <td><input type="number" min="0" max="99" step="0.01" value="${pallet.grossWeight.toFixed(2)}"
                    onchange="updatePallet('${pallet.id}', 'grossWeight', this.value)"></td>
            <td>${pallet.netWeight.toFixed(2)}</td>
            <td><input type="number" value="${pallet.dimX.toFixed(2)}" step="0.01" 
                onchange="updateDimension('${pallet.id}', 'dimX', this.value)"></td>
            <td><input type="number" value="${pallet.dimY.toFixed(2)}" step="0.01" 
                onchange="updateDimension('${pallet.id}', 'dimY', this.value)"></td>
            <td><input type="number" value="${pallet.dimZ.toFixed(2)}" step="0.01" 
                onchange="updateDimension('${pallet.id}', 'dimZ', this.value)"></td>
            <td>${(pallet.bulk * volumeFactor).toFixed(2)} ${volumeUnit}</td>
            <td>
                <select onchange="updatePallet('${pallet.id}', 'stackable', this.value)">
                    <option ${pallet.stackable === 'YES' ? 'selected' : ''}>YES</option>
                    <option ${pallet.stackable === 'NOT' ? 'selected' : ''}>NOT</option>
                </select>
            </td>
            <td><input type="number" value="${pallet.unitsPallet}" min="1"
                onchange="updatePallet('${pallet.id}', 'unitsPallet', this.value)"></td>
            <td colspan="4" class="empty-header"></td>
            <td><span class="delete-btn" onclick="deleteRow('${pallet.id}')">✕</span></td>
        `;
        tbody.prepend(palletRow);

        // 2. Items del Pallet
        pallet.items.forEach(item => {
            const itemRow = document.createElement('tr');
            itemRow.className = 'dynamic-row item-row';
            itemRow.classList.add(`pallet-group-${pallet.palletNum}`);
            itemRow.dataset.id = item.id;
            itemRow.innerHTML = `
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                    <input type="text"
                        class="autocomplete-input"
                        list="materialesList-${item.id}"
                        value="${idioma === 'ES' ? (materiales.find(m => m.description === item.description)?.nameEs || item.nameEs || '') : (item.nameEn || item.description || '')}"
                        onblur="editarProducto(event, '${item.id}')"
                        placeholder="Buscar o escribir producto..." />

                    <datalist id="materialesList-${item.id}">
                        ${materiales.map(m => `
                            <option value="${idioma === 'ES' ? m.nameEs : m.description}"></option>
                        `).join('')}
                    </datalist>
                </td>
                <td><input type="number" value="${item.units}" 
                    onchange="updateItem('${item.id}', 'units', this.value)"></td>
                <td>
                ${(item.netWeightUnit * factor).toFixed(2)} ${weightUnit}
                </td>
                <td>
                ${(item.totalWeight * factor).toFixed(2)} ${weightUnit}
                </td>
                <td>
                  <input type="text"
                         class="taric-input"
                         value="${item.taric || ''}"
                         placeholder="TARIC"
                         onchange="updateItem('${item.id}', 'taric', this.value)">
                </td>
                <td><span class="delete-btn" onclick="deleteRow('${item.id}')">✕</span></td>
            `;
            tbody.prepend(itemRow);
        });

        // 3. Botón Add Item
        const addButtonRow = document.createElement('tr');
        addButtonRow.className = 'dynamic-row add-item-row';
        addButtonRow.classList.add(`pallet-group-${pallet.palletNum}`);
        addButtonRow.innerHTML = `
            <td colspan="15">
                <button onclick="addItem('${pallet.id}')">➕ Añadir Producto</button>
            </td>
        `;
        tbody.prepend(addButtonRow);
    });

    restoreTableScroll(scrollY);
}

// ======================
// ACTUALIZACIONES
// ======================

function updatePallet(id, field, value) {
    const pallet = data.find(p => p.id === id);
    if (!pallet) return;

    if (field === 'unitsPallet') {
        value = Math.max(1, parseInt(value) || 1); // Validación mínimo 1
    }

    pallet[field] = ['grossWeight', 'dimX', 'dimY', 'dimZ', 'unitsPallet'].includes(field) 
        ? Number(value) 
        : value;
    if (field === 'grossWeight') {
        value = Math.max(0, Math.min(99, parseFloat(value) || 0));
    }

    calculateBulk(pallet);
    calculateTotals(id);

}

function updateDimension(id, dimension, value) {
    const pallet = data.find(p => p.id === id);
    if (!pallet) return;
    
    pallet[dimension] = Number(value) || 0;
    calculateBulk(pallet);
}

function updateItem(id, field, value) {
    data.forEach(pallet => {
        const item = pallet.items.find(i => i.id === id);
        if (item) {
            if (field === 'description') {
                const material = materiales.find(m => m.description === value);
                item.description = value;
                item.nameEs = material?.nameEs || '';
                item.netWeightUnit = material?.netWeight || 0;
                item.taric = material?.taricNumber || '';
            } else if (field === 'taric') {
                item.taric = (value || '').trim();
            } else {
                item[field] = Number(value) || 0;
            }

            // Calcular peso total en función del idioma
            let total = item.units * item.netWeightUnit;
            item.totalWeight = Number(total.toFixed(2));

            calculateTotals(pallet.id);
        }
    });
    renderTable();
}

function autocompleteProducto(event, itemId) {
    const inputText = event.target.value.toLowerCase();

    const match = materiales.find(m => {
        const label = idioma === 'ES' ? m.nameEs : m.description;
        return label.toLowerCase() === inputText;
    });

    data.forEach(pallet => {
        const item = pallet.items.find(i => i.id === itemId);
        if (item) {
            if (match) {
                item.description = match.description;
                item.nameEs = match.nameEs;
                item.nameEn = match.description;
                item.netWeightUnit = match.netWeight;
                item.taric = match.taricNumber;
            } else {
                item.description = inputText;
                item.nameEs = inputText;
                item.nameEn = inputText;
                item.netWeightUnit = 0;
                item.taric = "";
            }

            item.totalWeight = item.units * item.netWeightUnit;
            calculateTotals(pallet.id);
        }
    });

    renderTable();
}

function editarProducto(event, itemId) {
    const inputText = (event.target.value || '').trim();
    const lower = inputText.toLowerCase();

    // Intentar casar con la lista de materiales tanto por ES como por EN
    const match = materiales.find(m =>
        (m.nameEs && m.nameEs.toLowerCase() === lower) ||
        (m.description && m.description.toLowerCase() === lower)
    );

    data.forEach(pallet => {
        const item = pallet.items.find(i => i.id === itemId);
        if (!item) return;

        if (match) {
            // Coincidencia exacta con catálogo: rellenamos todo
            item.description = match.description;
            item.nameEs = match.nameEs;
            item.nameEn = match.description;
            item.netWeightUnit = match.netWeight;
            item.taric = match.taricNumber;
        } else {
            // Texto libre: dejamos editable el nombre SIN borrar peso ni TARIC existentes
            item.description = inputText;
            item.nameEs = inputText;
            item.nameEn = inputText;
            // Si no hay peso previo, lo dejamos en 0. Si ya había, lo conservamos.
            item.netWeightUnit = Number(item.netWeightUnit) || 0;
            // Si no había TARIC previo, lo dejamos vacío; si ya había, lo conservamos.
            item.taric = (item.taric || '').trim();
        }

        // Recalcular totales del ítem/palet
        item.totalWeight = (Number(item.units) || 0) * (Number(item.netWeightUnit) || 0);
        calculateTotals(pallet.id);
    });

    renderTable();
}

// ======================
// CÁLCULOS
// ======================

function calculateBulk(pallet) {
    if (!pallet) return;
    
    const rawBulk = pallet.dimX * pallet.dimY * pallet.dimZ * pallet.unitsPallet;
    pallet.bulk = Number(rawBulk.toFixed(2)); // Convertir a número
    renderTable();
}

function calculateTotals(palletId) {
    const pallet = data.find(p => p.id === palletId);
    if (!pallet) return;
    
    pallet.netWeight = pallet.items.reduce((sum, item) => sum + item.totalWeight, 0);
    renderTable();
}

// ======================
// PERSISTENCIA
// ======================

function saveData() {
    const saveData = {
        pallets: data,
        lastUsedPalletNumber: lastUsedPalletNumber,
        consignee: document.getElementById("consigneeAddress").value
    };
    const fileName = prompt("Introduce un nombre para guardar este documento:", "miPackingList");
    if (!fileName) return;
    localStorage.setItem(`shippingData-${fileName}`, JSON.stringify(saveData));
    alert(`Datos guardados como '${fileName}' correctamente!`);
}

function loadData() {
    const fileName = prompt("Introduce el nombre del documento que deseas cargar:", "miPackingList");
    if (!fileName) return;
    const savedData = localStorage.getItem(`shippingData-${fileName}`);
    if (savedData) {
        const parsedData = JSON.parse(savedData);
        data = parsedData.pallets;
        lastUsedPalletNumber = parsedData.lastUsedPalletNumber;
        renderTable();
        if (parsedData.consignee) {
            document.getElementById("consigneeAddress").value = parsedData.consignee;
        }
        alert(`Datos '${fileName}' cargados correctamente!`);
    } else {
        alert(`No se encontraron datos con el nombre '${fileName}'`);
    }
}

// ======================
// GENERACIÓN PDF
// ======================

function renumberPallets() {
    [...data]
        .sort((firstPallet, secondPallet) => (Number(firstPallet.palletNum) || 0) - (Number(secondPallet.palletNum) || 0))
        .forEach((pallet, index) => {
            pallet.palletNum = index + 1;
        });

    lastUsedPalletNumber = data.length;
}

function generatePDF() {
    renumberPallets();
    renderTable();

    const consigneeTextarea = document.getElementById("consigneeAddress");
    let consigneeLines = consigneeTextarea.value.split('\n').slice(0, 5);
    while (consigneeLines.length < 5) consigneeLines.push('');
    const trimmedConsigneeLines = consigneeLines.slice(0, 5);

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Datos previos necesarios para continuar tras cargar la imagen
    const invoiceNumber = document.getElementById("invoiceNumber").value;
    const invoiceDate = document.getElementById("invoiceDate").value;
    const weightUnit = unidadPeso === 'LB' ? 'lb' : 'kg';
    const factor = unidadPeso === 'LB' ? 2.20462 : 1;
    const volumeFactor = unidadPeso === 'LB' ? 35.3147 : 1;
    const volumeUnit = unidadPeso === 'LB' ? 'ft³' : 'm³';
    const dimensionFactor = unidadPeso === 'LB' ? 3.28084 : 1; // metros a pies

    // Cargar imagen y continuar en onload
    const img = new Image();
    img.onload = function () {
        // Título "PACKING LIST" centrado y sombreado
        doc.setFillColor(41, 128, 185);
        doc.rect(14, 4, 182, 7, 'F'); // Fila sombreada más arriba
        doc.setTextColor(255);
        doc.setFontSize(12);
        doc.setFont(undefined, 'bold');
        doc.text('PACKING LIST', 105, 9, { align: 'center' }); // Texto subido
        doc.setTextColor(40); // Restaurar color texto por defecto
        // SHIPPER
        doc.setFontSize(10);
        doc.setTextColor(40);
        doc.setFont(undefined, 'bold');
        doc.text(idioma === 'ES' ? 'NOMBRE Y DIRECCION REMITENTE' : 'SHIPPER NAME AND ADDRESS', 14, 15);
        doc.setFont(undefined, 'normal');
        doc.setFontSize(9);
        doc.text([
            'EXTRAICE SL',
            'Parque Empresarial Los Llanos',
            'C/Extremadura nº 2, buzón 30',
            '41909 Salteras (Sevilla). SPAIN',
            'Phone: +34 955 110 357',
            'Alberto Sandino - 627 068 429 - alberto@xtraice.com',
            ' '
        ], 14, 20);

        // CONSIGNEE
        doc.setFont(undefined, 'bold');
        doc.setFontSize(10);
        doc.text(idioma === 'ES' ? 'NOMBRE Y DIRECCION CONSIGNATARIO' : 'CONSIGNEE NAME AND ADDRESS', 110, 15);
        doc.setFont(undefined, 'normal');
        doc.setFontSize(9);
        doc.setTextColor(0);
        trimmedConsigneeLines.forEach((line, index) => {
            doc.text(line, 110, 20 + index * 4);
        });

        // FACTURA (en línea con el logo)
        doc.setFont(undefined, 'bold');
        doc.setFontSize(8);
        // Logo a la izquierda
        try {
            doc.addImage(img, 'JPEG', 14, 43, 22, 8.5); // x, y, width, height
        } catch (error) {
            console.warn('No se pudo insertar el logo en el PDF:', error);
        }

        // FACTURA (en línea con el logo)
        doc.setFont(undefined, 'bold');
        doc.setFontSize(8);

        // FACTURA Nº centrado
        doc.text(`${idioma === 'ES' ? 'FACTURA Nº' : 'INVOICE Nº'}: ${invoiceNumber}`, 80, 51);

        // FECHA FACTURA a la derecha
        doc.text(`${idioma === 'ES' ? 'FECHA FACTURA' : 'INVOICE DATE'}: ${invoiceDate}`, 150, 51);
        // Ahora sí: el contenido del PDF
        continuarPDF(doc, factor, weightUnit, volumeFactor, volumeUnit, dimensionFactor, trimmedConsigneeLines);
    };
    img.onerror = function () {
        continuarPDF(doc, factor, weightUnit, volumeFactor, volumeUnit, dimensionFactor, trimmedConsigneeLines);
    };
    img.src = './logoxtraice.jpg';
}

function continuarPDF(doc, factor, weightUnit, volumeFactor, volumeUnit, dimensionFactor, consigneeLines) {
    let yPos = 48 + consigneeLines.length * 1;
    let totalGross = 0;
    let totalNet = 0;
    let totalBulk = 0;
    let allItems = [];

    [...data].sort((a, b) => a.palletNum - b.palletNum).forEach(pallet => {
        pallet.items.forEach((item, index) => {
            allItems.push([
                index === 0 ? pallet.palletNum : '',
                idioma === 'ES'
                    ? (item.nameEs || item.description)
                    : (item.nameEn || item.description),
                '',
                item.units,
                (item.netWeightUnit * factor).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ` ${weightUnit}`,
                (item.totalWeight * factor).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ` ${weightUnit}`,
                item.taric,
                { raw: pallet.palletNum, content: '' }
            ]);
        });
        // 🧮 Dimensiones adaptadas a unidad de medida
        const medidas = unidadPeso === 'LB'
            ? `${(pallet.dimX * dimensionFactor).toFixed(2)}x${(pallet.dimY * dimensionFactor).toFixed(2)}x${(pallet.dimZ * dimensionFactor).toFixed(2)} ft`
            : `${pallet.dimX.toFixed(2)}x${pallet.dimY.toFixed(2)}x${pallet.dimZ.toFixed(2)} m`;

        // Calcular rango si hay agrupación de pallets
        const firstNum = pallet.palletNum;
        const lastNum = firstNum + (pallet.unitsPallet || 1) - 1;
        const palletLabel = pallet.unitsPallet > 1
        ? (idioma === 'ES'
            ? `TOTAL PALLET nº ${firstNum} al ${lastNum}`
            : `TOTAL PALLET nº ${firstNum} to ${lastNum}`)
        : `TOTAL PALLET nº ${firstNum}`;


        allItems.push([
            '',
            palletLabel,
            pallet.stackable || '',
            medidas,
            '',
            (pallet.netWeight * factor).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ` ${weightUnit}`,
            (pallet.grossWeight * factor).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ` ${weightUnit}`,
            {
                raw: pallet.palletNum,
                content: ((pallet.netWeight + pallet.grossWeight) * factor).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ` ${weightUnit}`
            }
        ]);

        totalGross += pallet.grossWeight;
        totalNet += pallet.netWeight;
        totalBulk += pallet.bulk;
    });

    // TABLA PRINCIPAL
    const headers = idioma === 'ES'
    ? ['Nº Pallet', 'Descripción', 'Apilable', 'Unidades / Medidas', 'Neto / Unidad', 'Neto Total', 'Taric / Tara Pallet', 'Bruto Total']
    : ['Pallet No.', 'Description', 'Stackable', 'Units / Dimensions', 'Net per Unit', 'Net Total', 'Taric / Tare Weight', 'Gross Total'];

    doc.autoTable({
        startY: yPos,
        head: [headers],
        body: allItems,
        theme: 'grid',
        styles: { fontSize: 6, cellPadding: 1.2 },
        headStyles: {
            fillColor: [41, 128, 185],
            textColor: 255,
            fontStyle: 'bold',
            minCellHeight: 6
        },
        useCss: true,
        didParseCell: function (data) {
            if (data.section !== 'body') return;
            if (typeof data.row.raw[1] === 'string' && data.row.raw[1].includes('TOTAL PALLET')) {
                data.cell.styles.fillColor = [230, 240, 255];
                data.cell.styles.fontStyle = 'bold';
            }

            const palletCell = data.row.raw[7];
            const currentPallet = palletCell?.raw ?? palletCell;
            const rowIndex = data.row.index;
            let prevPallet = allItems[rowIndex - 1]?.[7]?.raw ?? allItems[rowIndex - 1]?.[7];
            let nextPallet = allItems[rowIndex + 1]?.[7]?.raw ?? allItems[rowIndex + 1]?.[7];

            data.cell.styles.lineColor = [0, 112, 192];
            data.cell.styles.lineWidth = { top: 0, bottom: 0, left: 0, right: 0 };
            if (rowIndex === 0 || prevPallet !== currentPallet) data.cell.styles.lineWidth.top = 0.5;
            if (rowIndex === allItems.length - 1 || nextPallet !== currentPallet) data.cell.styles.lineWidth.bottom = 0.5;
            if (data.column.index === 0) data.cell.styles.lineWidth.left = 0.5;
            if (data.column.index === 7) data.cell.styles.lineWidth.right = 0.5;
        },
        didDrawPage: function () {
            const pageCount = doc.internal.getNumberOfPages();
            doc.setFontSize(8);
            doc.text(`Page ${doc.internal.getCurrentPageInfo().pageNumber} of ${pageCount}`, 195, 290, { align: 'right' });
        }
    });

    // TABLA DE TOTALES
    yPos = doc.lastAutoTable.finalY + 5;
    doc.autoTable({
        startY: yPos,
        head: [[
            idioma === 'ES' ? 'Nº Pallets' : 'No. of Pallets',
            idioma === 'ES' ? 'Total Neto' : 'Total Net',
            idioma === 'ES' ? 'Total Bruto' : 'Total Gross',
            idioma === 'ES' ? `Volumen Total (${volumeUnit})` : `Total Volume (${volumeUnit})`
        ]],
        body: [[
            data.reduce((sum, p) => sum + (p.unitsPallet || 1), 0).toString(),
            `${(totalNet * factor).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ${weightUnit}`,
            `${((totalNet + totalGross) * factor).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ${weightUnit}`,
            `${(totalBulk * volumeFactor).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ${volumeUnit}`
        ]],
        theme: 'grid',
        styles: {
            fontSize: 9,
            halign: 'center',
            cellPadding: 2,
            textColor: [40, 40, 40],
            fillColor: [240, 240, 255]
        },
        headStyles: {
            fillColor: [200, 220, 255],
            halign: 'center',
            textColor: 40,
            fontStyle: 'bold'
        },
        columnStyles: {
            0: { halign: 'center' },
            1: { halign: 'center' },
            2: { halign: 'center' },
            3: { halign: 'center' }
        }
    });

    doc.save('packing-list.pdf');
}

// Inicialización
window.renderTable = renderTable;
window.onload = async function () {
    try {
        await loadProductCatalog();
        restoreWorkingData();
        renderTable();
    } catch (error) {
        console.error(error);
        alert(`No se pudo cargar el catálogo de productos: ${error.message}`);
    }
};

// Limitar la dirección del consignatario a exactamente 5 líneas


async function exportToExcel() {
    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet("Packing List");
    sheet.columns = [
        { header: '', width: 10 },
        { header: '', width: 30 },
        { header: '', width: 10 },
        { header: '', width: 15 },
        { header: '', width: 15 },
        { header: '', width: 15 },
        { header: '', width: 20 },
        { header: '', width: 20 }
    ];

    // Estilo común para títulos
    const titleStyle = {
        font: { bold: true, size: 14, color: { argb: 'FFFFFFFF' } },
        fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF2980B9' } },
        alignment: { horizontal: 'center' }
    };

    // Fila 1 - Título
    sheet.mergeCells('A1:H1');
    const titleCell = sheet.getCell('A1');
    titleCell.value = 'PACKING LIST';
    Object.assign(titleCell, titleStyle);

    // Remitente
    const remitente = [
        'EXTRAICE SL',
        'Parque Empresarial Los Llanos',
        'C/Extremadura nº 2, buzón 30',
        '41909 Salteras (Sevilla). SPAIN',
        'Phone: +34 955 110 357',
        'Alberto Sandino - 627 068 429 - alberto@xtraice.com'
    ];
    remitente.forEach((line, i) => {
        sheet.getCell(`A${i + 3}`).value = line;
    });

    // Destinatario
    const consigneeLines = document.getElementById("consigneeAddress").value.split('\n').slice(0, 5);
    consigneeLines.forEach((line, i) => {
        sheet.getCell(`E${i + 3}`).value = line;
    });

    // Nº Factura y Fecha
    sheet.getCell('A9').value = 'FACTURA Nº:';
    sheet.getCell('B9').value = document.getElementById("invoiceNumber").value;
    sheet.getCell('E9').value = 'FECHA FACTURA:';
    sheet.getCell('F9').value = document.getElementById("invoiceDate").value;

    // Cabecera de tabla
    const headers = ['Palet Nº', 'Descripción', 'Stackable', 'Unidades / Medidas', 'Peso Neto / Unidad', 'Total Neto', 'Tara Pallet', 'Total Bruto'];
    sheet.addRow([]);
    const headerRow = sheet.addRow(headers);
    headerRow.eachCell((cell) => {
        cell.font = { bold: true, color: { argb: 'FFFFFFFF' } };
        cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF2980B9' } };
        cell.alignment = { horizontal: 'center' };
    });

    // Datos
    const factor = unidadPeso === 'LB' ? 2.20462 : 1;
    let totalNet = data.reduce((sum, p) => sum + p.netWeight, 0);
    let totalGross = data.reduce((sum, p) => sum + p.grossWeight, 0);
    let totalBulk = data.reduce((sum, p) => sum + p.bulk, 0);
    const weightUnit = unidadPeso === 'LB' ? 'lb' : 'kg';
    const volumeUnit = unidadPeso === 'LB' ? 'ft³' : 'm³';
    const volumeFactor = unidadPeso === 'LB' ? 35.3147 : 1;
    [...data].sort((a, b) => a.palletNum - b.palletNum).forEach(pallet => {
        pallet.items.forEach((item, index) => {
            sheet.addRow([
                index === 0 ? pallet.palletNum : '',
                idioma === 'ES' ? (item.nameEs || item.description) : (item.nameEn || item.description),
                '',
                item.units,
                (item.netWeightUnit * factor).toFixed(2),
                (item.totalWeight * factor).toFixed(2),
                item.taric,
                ''
            ]);
        });

        const firstNum = pallet.palletNum;
        const lastNum = firstNum + (pallet.unitsPallet || 1) - 1;
        const palletLabel = pallet.unitsPallet > 1
            ? (idioma === 'ES' ? `TOTAL PALLET nº ${firstNum} al ${lastNum}` : `TOTAL PALLET nº ${firstNum} to ${lastNum}`)
            : `TOTAL PALLET nº ${firstNum}`;

        const medidas = unidadPeso === 'LB'
            ? `${(pallet.dimX * 3.28084).toFixed(2)}x${(pallet.dimY * 3.28084).toFixed(2)}x${(pallet.dimZ * 3.28084).toFixed(2)} ft`
            : `${pallet.dimX.toFixed(2)}x${pallet.dimY.toFixed(2)}x${pallet.dimZ.toFixed(2)} m`;

        sheet.addRow([
            '',
            palletLabel,
            pallet.stackable,
            medidas,
            '',
            (pallet.netWeight * factor).toFixed(2),
            (pallet.grossWeight * factor).toFixed(2),
            ((pallet.netWeight + pallet.grossWeight) * factor).toFixed(2)
        ]);
        const totalRowStart = sheet.rowCount + 2;

        sheet.addRow([]);
        sheet.addRow([idioma === 'ES' ? 'Nº Pallets' : 'Total Pallets', data.length.toString()]);
        sheet.addRow([idioma === 'ES' ? 'Total Neto' : 'Total Net', `${(totalNet * factor).toFixed(2)} ${weightUnit}`]);
        sheet.addRow([idioma === 'ES' ? 'Total Bruto' : 'Total Gross', `${((totalNet + totalGross) * factor).toFixed(2)} ${weightUnit}`]);
        sheet.addRow([idioma === 'ES' ? `Volumen Total (${volumeUnit})` : `Total Volume (${volumeUnit})`, `${(totalBulk * volumeFactor).toFixed(2)} ${volumeUnit}`]);

        for (let i = totalRowStart; i <= totalRowStart + 3; i++) {
            sheet.getCell(`A${i}`).font = { bold: true };
        }

    });

    // Exportar
    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "packing-list.xlsx";
    a.click();
}

document.getElementById("consigneeAddress").addEventListener("input", function () {
    const lines = this.value.split('\n');

    if (lines.length > 5) {
        this.value = lines.slice(0, 5).join('\n');
    }
});

function resetScreen() {
    if (confirm("¿Estás seguro de que deseas borrar todos los datos y empezar desde cero?")) {
        data = [];
        lastUsedPalletNumber = 0;
        sessionStorage.removeItem(workingDataStorageKey);
        document.getElementById("consigneeAddress").value = "";
        document.getElementById("invoiceNumber").value = "";
        document.getElementById("invoiceDate").value = "";
        renderTable();
    }
}


function exportToFile() {
    const fileName = prompt("Introduce un nombre para el archivo:", "packing-list");
    if (!fileName) return;

    const saveData = {
        pallets: data,
        lastUsedPalletNumber: lastUsedPalletNumber,
        consignee: document.getElementById("consigneeAddress").value,
        invoiceNumber: document.getElementById("invoiceNumber")?.value || '',
        invoiceDate: document.getElementById("invoiceDate")?.value || ''
    };

    const jsonStr = JSON.stringify(saveData, null, 2);
    const blob = new Blob([jsonStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `${fileName}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}


function importFromFile(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        const content = e.target.result;
        try {
            const importedData = JSON.parse(content);
            data = importedData.pallets || [];
            lastUsedPalletNumber = importedData.lastUsedPalletNumber || 0;
            if (importedData.consignee) document.getElementById("consigneeAddress").value = importedData.consignee;
            if (importedData.invoiceNumber) document.getElementById("invoiceNumber").value = importedData.invoiceNumber;
            if (importedData.invoiceDate) document.getElementById("invoiceDate").value = importedData.invoiceDate;
            renderTable();
            alert("Archivo cargado correctamente.");
        } catch (err) {
            alert("Error al importar el archivo. ¿Es un archivo válido?");
        }
    };
    reader.readAsText(file);
}

