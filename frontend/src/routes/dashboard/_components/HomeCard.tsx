"use client";
import { Card } from "@/components/core/Card/Card";
import { formatCurrency } from "@/utils/numbers";
import { sReturn } from "@/utils/text";
import { Skeleton, Typography } from "@mui/material";

interface Props {
  title: string;
  summedAmount: number | undefined;
  amount: number | undefined;
  isLoading: boolean;
}

export function HomeCard({
  title,
  amount,
  summedAmount,
  isLoading,
}: Props): React.JSX.Element {
  if (isLoading) {
    return (
      <Skeleton
        variant="rounded"
        width={"33%"}
        height={"146px"}
        sx={{ borderRadius: "16px" }}
      />
    );
  }
  return (
    <Card stack stackGap="8px" width="calc(33% - 16px)" title={title}>
      <Typography variant="h1">{formatCurrency(summedAmount ?? 0)}</Typography>
      <Typography variant="caption" color={"secondary"}>
        {amount} {`cobro${sReturn(amount ?? 0)}`}
      </Typography>
    </Card>
  );
}
