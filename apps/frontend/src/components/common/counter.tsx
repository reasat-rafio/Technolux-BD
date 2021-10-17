import MinusIcon from '@components/icons/minus-icon';
import PlusIcon from '@components/icons/plus-icon';
import clsx from 'clsx';

type CounterProps = {
  quantity: number;
  onDecrement: (e: any) => void;
  onIncrement: (e: any) => void;
  disableIncrement?: boolean;
  disableDecrement?: boolean;
  variant?: 'default' | 'dark';
  className?: string;
};

const Counter: React.FC<CounterProps> = ({
  quantity,
  onDecrement,
  onIncrement,
  disableIncrement = false,
  disableDecrement = false,
  variant = 'default',
}) => {
  const size = variant !== 'dark' ? '12px' : '10px';
  return (
    <div
      className={clsx(
        'group flex items-center justify-between rounded-md overflow-hidden flex-shrink-0',
        variant === 'default' && 'border h-11 md:h-12 border-gray-300',
        variant === 'dark' && 'h-8 md:h-9 shadow-navigation bg-heading'
      )}
    >
      <button
        onClick={onDecrement}
        className={clsx(
          'flex items-center justify-center flex-shrink-0 h-full transition ease-in-out duration-300 focus:outline-none',
          variant === 'default' &&
            'w-10 md:w-12 text-heading border-e border-gray-300 hover:text-white hover:bg-heading',
          variant === 'dark' &&
            'w-8 md:w-9 text-white bg-heading hover:bg-gray-600 focus:outline-none'
        )}
        disabled={disableDecrement}
      >
        <MinusIcon width={size} />
      </button>

      <span
        className={clsx(
          'font-semibold flex items-center justify-center h-full  transition-colors duration-250 ease-in-out cursor-default flex-shrink-0',
          variant === 'default' &&
            'text-base text-heading w-12  md:w-20 xl:w-24',
          variant === 'dark' && 'text-sm text-white w-8 md:w-10 '
        )}
      >
        {quantity}
      </span>

      <button
        onClick={onIncrement}
        className={clsx(
          'flex items-center justify-center h-full flex-shrink-0 transition ease-in-out duration-300 focus:outline-none',
          variant === 'default' &&
            'w-10 md:w-12 text-heading border-s border-gray-300 hover:text-white hover:bg-heading',
          variant === 'dark' &&
            'w-8 md:w-9 text-white bg-heading hover:bg-gray-600 focus:outline-none'
        )}
        disabled={disableIncrement}
      >
        <PlusIcon width={size} height={size} />
      </button>
    </div>
  );
};
export default Counter;
