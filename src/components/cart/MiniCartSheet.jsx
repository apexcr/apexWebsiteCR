import { CartIcon } from "@/components/icons/CartIcon";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useCart } from "@/context/CartContext";

function formatCurrency(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

export function MiniCartSheet() {
  const {
    cartCount,
    cartItems,
    cartSubtotal,
    isCartOpen,
    removeFromCart,
    setIsCartOpen,
    updateItemQuantity,
  } = useCart();

  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      <SheetContent
        side="right"
        className="w-full border-l border-gray-200 bg-white p-0 text-black sm:max-w-md"
      >
        <SheetHeader className="border-b border-gray-200 px-6 py-5">
          <SheetTitle className="font-mono text-xl font-bold uppercase tracking-wide text-black">
            Your Cart
          </SheetTitle>
          <SheetDescription className="font-mono text-gray-600 uppercase tracking-wide">
            {cartCount} {cartCount === 1 ? "item" : "items"}
          </SheetDescription>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          {cartItems.length === 0 ? (
            <div className="flex h-full min-h-[320px] flex-col items-center justify-center gap-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-gray-300 text-gray-500">
                <CartIcon />
              </div>
              <p className="font-mono text-sm uppercase tracking-wide text-gray-600">
                Your cart is empty
              </p>
            </div>
          ) : (
            <ul className="space-y-4">
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  className="rounded-xl border border-gray-200 bg-gray-50 p-4"
                >
                  <div className="mb-3 flex items-start justify-between gap-3">
                    <div>
                      <p className="font-mono text-xs tracking-[0.18em] text-gray-500 uppercase">
                        {item.category}
                      </p>
                      <h3 className="font-mono text-sm font-bold tracking-wide uppercase text-black">
                        {item.name}
                      </h3>
                    </div>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="font-mono text-xs font-bold tracking-wide text-gray-500 uppercase hover:text-black"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </Button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center rounded-lg border border-gray-300 bg-white">
                      <Button
                        type="button"
                        variant="ghost"
                        className="h-9 w-9 rounded-none text-lg text-gray-600 hover:bg-gray-100 hover:text-black"
                        onClick={() =>
                          updateItemQuantity(
                            item.id,
                            Math.max(0, item.quantity - 1),
                          )
                        }
                      >
                        -
                      </Button>
                      <span className="font-mono min-w-10 text-center text-sm font-bold">
                        {item.quantity}
                      </span>
                      <Button
                        type="button"
                        variant="ghost"
                        className="h-9 w-9 rounded-none text-lg text-gray-600 hover:bg-gray-100 hover:text-black"
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </Button>
                    </div>

                    <p className="font-mono text-sm font-bold text-black">
                      {formatCurrency(item.unitPrice * item.quantity)}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <SheetFooter className="border-t border-gray-200 px-6 py-5">
          <div className="mb-3 flex w-full items-center justify-between">
            <span className="font-mono text-xs font-bold tracking-[0.15em] text-gray-500 uppercase">
              Subtotal
            </span>
            <span className="font-mono text-lg font-black text-black">
              {formatCurrency(cartSubtotal)}
            </span>
          </div>

          <Button
            type="button"
            variant="heroPrimary"
            size="heroPrimary"
            className="w-full justify-center"
          >
            Checkout
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
