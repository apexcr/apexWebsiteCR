// import HeroSection from '@/components/shadcn-studio/blocks/hero-section'
// import ProductList, {
//   ProductItem,
// } from '@/components/shadcn-studio/blocks/product-list'
// import ProductListDeals from '@/components/shadcn-studio/blocks/product-list-deals'
import { MessageCircle } from 'lucide-react'
import Image from 'next/image'

// const products: ProductItem[] = [
//   {
//     image: '/placeholders/product-sample.jpg',
//     imgAlt: 'Apex Peptide Product Sample',
//     title: 'BPC-500',
//     handle: 'bpc-500-1',
//     description:
//       'BPC-500 is a synthetic peptide that has been shown to have various health benefits, including promoting healing and reducing inflammation.',
//     descriptionHtml:
//       '<p>BPC-500 is a synthetic peptide that has been shown to have various health benefits, including promoting healing and reducing inflammation.</p>',
//     vendor: 'Apex Peptides',
//     productType: 'Peptide',
//     status: 'active',
//     tags: ['peptide', 'health', 'wellness'],
//     price: 199.99,
//     salePrice: 149.99,
//     badges: ['Free shipping'],
//   },
//   {
//     image: '/placeholders/product-sample.jpg',
//     imgAlt: 'Apex Peptide Product Sample',
//     title: 'BPC-500',
//     handle: 'bpc-500-2',
//     description:
//       'BPC-500 is a synthetic peptide that has been shown to have various health benefits, including promoting healing and reducing inflammation.',
//     descriptionHtml:
//       '<p>BPC-500 is a synthetic peptide that has been shown to have various health benefits, including promoting healing and reducing inflammation.</p>',
//     vendor: 'Apex Peptides',
//     productType: 'Peptide',
//     status: 'active',
//     tags: ['peptide', 'health', 'wellness'],
//     price: 199.99,
//     salePrice: 149.99,
//     badges: ['Free shipping'],
//   },
//   {
//     image: '/placeholders/product-sample.jpg',
//     imgAlt: 'Apex Peptide Product Sample',
//     title: 'BPC-500',
//     handle: 'bpc-500-3',
//     description:
//       'BPC-500 is a synthetic peptide that has been shown to have various health benefits, including promoting healing and reducing inflammation.',
//     descriptionHtml:
//       '<p>BPC-500 is a synthetic peptide that has been shown to have various health benefits, including promoting healing and reducing inflammation.</p>',
//     vendor: 'Apex Peptides',
//     productType: 'Peptide',
//     status: 'active',
//     tags: ['peptide', 'health', 'wellness'],
//     price: 199.99,
//     salePrice: 149.99,
//     badges: ['Free shipping'],
//   },
//   {
//     image: '/placeholders/product-sample.jpg',
//     imgAlt: 'Apex Peptide Product Sample',
//     title: 'BPC-500',
//     handle: 'bpc-500-4',
//     description:
//       'BPC-500 is a synthetic peptide that has been shown to have various health benefits, including promoting healing and reducing inflammation.',
//     descriptionHtml:
//       '<p>BPC-500 is a synthetic peptide that has been shown to have various health benefits, including promoting healing and reducing inflammation.</p>',
//     vendor: 'Apex Peptides',
//     productType: 'Peptide',
//     status: 'active',
//     tags: ['peptide', 'health', 'wellness'],
//     price: 199.99,
//     salePrice: 149.99,
//     badges: ['Free shipping'],
//   },
//   {
//     image: '/placeholders/product-sample.jpg',
//     imgAlt: 'Apex Peptide Product Sample',
//     title: 'BPC-500',
//     handle: 'bpc-500-5',
//     description:
//       'BPC-500 is a synthetic peptide that has been shown to have various health benefits, including promoting healing and reducing inflammation.',
//     descriptionHtml:
//       '<p>BPC-500 is a synthetic peptide that has been shown to have various health benefits, including promoting healing and reducing inflammation.</p>',
//     vendor: 'Apex Peptides',
//     productType: 'Peptide',
//     status: 'active',
//     tags: ['peptide', 'health', 'wellness'],
//     price: 199.99,
//     salePrice: 149.99,
//     badges: ['Free shipping'],
//   },
//   {
//     image: '/placeholders/product-sample.jpg',
//     imgAlt: 'Apex Peptide Product Sample',
//     title: 'BPC-500',
//     handle: 'bpc-500-6',
//     description:
//       'BPC-500 is a synthetic peptide that has been shown to have various health benefits, including promoting healing and reducing inflammation.',
//     descriptionHtml:
//       '<p>BPC-500 is a synthetic peptide that has been shown to have various health benefits, including promoting healing and reducing inflammation.</p>',
//     vendor: 'Apex Peptides',
//     productType: 'Peptide',
//     status: 'active',
//     tags: ['peptide', 'health', 'wellness'],
//     price: 199.99,
//     salePrice: 149.99,
//     badges: ['Free shipping'],
//   },
// ]

export default function Home() {
  return (
    <>
      <div className="min-h-[calc(100dvh+70px)] -mt-17.5 bg-[url('/placeholders/product-1.jpg')] bg-bottom bg-no-repeat text-center flex flex-col justify-start items-center bg-black bg-contain">
        <div className="flex flex-col justify-center items-center">
          <Image
            src="/apex-peptides-icon-white.svg"
            alt="Apex Peptides"
            width={896}
            height={320}
            className="h-20 w-auto mb-8"
          />
          <h1 className="text-[clamp(2.4rem,7vw,3.8rem)] xl:text-7xl font-semibold font-heading mb-8 text-white">
            Peptidos Apex en Costa Rica
          </h1>
          {/* <p className="text-4xl mb-8 text-accent font-bold max-w-lg">
            Descubre nuestra gama de péptidos de alta calidad para la salud y el
            bienestar.
          </p> */}
          <p className="text-4xl font-bold bg-yellow-300 text-black px-4 py-2 mb-8  -rotate-3">
            Página en construcción.
          </p>
          <div>
            <p className="text-xl font-bold">
              Contáctanos para más información sobre nuestros productos y
              servicios.
            </p>
            <div className="mt-4 flex flex-col items-center gap-1 text-sm">
              <a
                href="https://wa.me/50660624449"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-white hover:text-green-400"
              >
                <MessageCircle className="size-5" />
                +506 6062 4449
              </a>
              <a
                href="https://www.instagram.com/apex.peptides.cr"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-white hover:text-pink-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-5"
                  aria-hidden="true"
                >
                  <path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm0 1.8A4 4 0 0 0 3.8 7.8v8.4a4 4 0 0 0 4 4h8.4a4 4 0 0 0 4-4V7.8a4 4 0 0 0-4-4H7.8Zm8.85 1.35a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.8a3.2 3.2 0 1 0 0 6.4 3.2 3.2 0 0 0 0-6.4Z" />
                </svg>
                https://www.instagram.com/apex.peptides.cr
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <HeroSection products={products} />
      <ProductList products={products} />
      <ProductListDeals products={products} /> */}
    </>
  )
}
