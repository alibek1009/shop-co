import { newArrivalsData, relatedProductData, topSellingData } from "../page";

import ProductCard from "@/components/common/ProductCard";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function ShopPage() {
  return (
    <main className="pb-20">
      <div className="max-w-frame mx-auto px-4 xl:px-0">
        <hr className="h-[1px] border-t-black/10 mb-5 sm:mb-6" />

        <div className="flex flex-col w-full space-y-5">
          <div className="flex items-center justify-between">
            <h1 className="font-bold text-2xl md:text-[32px]">Casual</h1>
          </div>

          <div className="w-full grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            {[
              ...relatedProductData.slice(1, 4),
              ...newArrivalsData.slice(1, 4),
              ...topSellingData.slice(1, 4),
            ].map((product) => (
              <ProductCard key={product.id} data={product} />
            ))}
          </div>

          <hr className="border-t-black/10" />

          <Pagination className="justify-between">
            <PaginationPrevious href="#" className="border border-black/10" />
            <PaginationContent>
              <PaginationItem>
                <PaginationLink
                  href="#"
                  className="text-black/50 font-medium text-sm"
                  isActive
                >
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#"
                  className="text-black/50 font-medium text-sm"
                >
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem className="hidden lg:block">
                <PaginationLink
                  href="#"
                  className="text-black/50 font-medium text-sm"
                >
                  3
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis className="text-black/50 font-medium text-sm" />
              </PaginationItem>
            </PaginationContent>
            <PaginationNext href="#" className="border border-black/10" />
          </Pagination>
        </div>
      </div>
    </main>
  );
}
