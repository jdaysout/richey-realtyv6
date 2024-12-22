import { Target, Transition, Variant } from 'framer-motion';

export interface AnimationVariant {
  hidden: Variant;
  visible: Variant;
}

export interface AnimationProps {
  variants: AnimationVariant;
}