// src/hooks/usePagination.ts
import { useMemo } from 'react';

interface UsePaginationParams<T> {
  items: T[];
  currentPage: number;
  itemsPerPage: number;
  maxVisiblePages?: number;
}

export function usePagination<T>({ items, currentPage, itemsPerPage, maxVisiblePages = 3 }: UsePaginationParams<T>) {
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const currentItems = useMemo(() => {
    const startIdx = (currentPage - 1) * itemsPerPage;
    return items.slice(startIdx, startIdx + itemsPerPage);
  }, [items, currentPage, itemsPerPage]);

  const visiblePages = useMemo(() => {
    let start = Math.max(currentPage - 1, 1);
    const end = Math.min(start + maxVisiblePages - 1, totalPages);
    if (end - start < maxVisiblePages - 1) {
      start = Math.max(end - maxVisiblePages + 1, 1);
    }
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  }, [currentPage, totalPages, maxVisiblePages]);

  return {
    totalPages,
    currentItems,
    visiblePages,
    startIndex: (currentPage - 1) * itemsPerPage,
  };
}
