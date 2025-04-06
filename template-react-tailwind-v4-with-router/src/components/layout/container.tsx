import React from 'react'
import type { ComponentPropsWithRef, ElementType } from 'react'

import { DistributiveOmit, OmitChildrenFromVoid } from '../../types/index'
import cn from '../../lib/cn'

function Container<As extends ElementType>(
   props: DistributiveOmit<OmitChildrenFromVoid<As>, keyof object> & { As: As }
): React.JSX.Element
function Container(props: ComponentPropsWithRef<'div'>): React.JSX.Element
function Container({ As: Component = 'div', ...props }) {
   const { className, ...rest } = props

   return (
      <>
         <Component
            // @ts-expect-error "it can not be made typesafe"
            className={cn('xl:container mx-auto px-3 md:px-[40px]', className)}
            {...rest}
         />
      </>
   )
}
export default Container
