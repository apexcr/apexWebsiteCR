import productsData from "./products.json";

export const products = productsData;

export function getHeroProduct() {
  return products.find((product) => product.isHero) ?? products[0] ?? null;
}

export function getTopSellerProducts() {
  return products.filter((product) => product.isTopSeller);
}

export function getProductById(id) {
  const normalizedId = Number(id);
  if (Number.isNaN(normalizedId)) return null;
  return products.find((product) => product.id === normalizedId) ?? null;
}

export function groupProductsByCategory(productList) {
  return productList.reduce((acc, product) => {
    const category = product.category || "Otros";

    if (!acc[category]) {
      acc[category] = [];
    }

    acc[category].push(product);
    return acc;
  }, {});
}

export function getDiscountedPrice(product) {
  if (!product?.discount) return product?.price ?? 0;
  return product.price * (1 - product.discount / 100);
}

export function formatMoney(value) {
  return new Intl.NumberFormat("es-CR", {
    style: "currency",
    currency: "CRC",
    useGrouping: false,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value ?? 0);
}
