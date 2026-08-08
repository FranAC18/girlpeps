# Especificación del Proyecto — Girl Peps

## 1. Visión General
**Girl Peps** es una marca y plataforma e-commerce de catálogo digital premium orientada a productos y compuestos de investigación (*Research Use Only - RUO*). El objetivo del sitio es proyectar una imagen femenina, elegante, limpia y profesional, brindando información transparente de productos y facilitando la selección de ítems en un carrito de compras interactivo con integración directa hacia **WhatsApp** al número **+1 (862) 233-3919**.

## 2. Canales & Configuración Centralizada
- **Marca**: Girl Peps
- **WhatsApp Oficial**: `+1 (862) 233-3919` (`wa.me/18622333919`)
- **Instagram Oficial**: `@girl_peps` (`https://www.instagram.com/girl_peps/`)
- **Configuración Central**: `src/config/siteConfig.ts`

## 3. Flujo Comercial & Cupones de Vendedores
1. **Detección Automática de Cupones por URL**:
   - Enlaces tipo `https://dominio.com/?coupon=NOMBREPEPS` detectan el cupón automáticamente al ingresar.
2. **Mapeo de Referidos**:
   - `NOMBREPEPS` → Vendedor A ($10 USD de descuento)
   - `NOMBREPEPS2` → Vendedor B ($10 USD de descuento)
   - `NOMBREPEPS3` → Vendedor C ($10 USD de descuento)
   - `GIRLPEPS` → Girl Peps Direct ($10 USD de descuento)
3. **Generación de Comanda WhatsApp Estructurada**:
   - Al presionar "Pedir por WhatsApp", se genera la comanda formal con Cliente, Teléfono, Productos, Subtotal, Cupón, Referido por Vendedor, Descuento, Total y Observaciones.

## 4. Educación & Compliance (RUO)
- Sección educativa sobre aminoácidos, señalización celular, metabolismo y longevidad.
- Cuadro oficial de exención de responsabilidad para compuestos de investigación RUO (*Research Use Only. Not for human consumption*).
