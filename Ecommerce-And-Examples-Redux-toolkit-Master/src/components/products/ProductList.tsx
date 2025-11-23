import React, { useEffect, JSX } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  Typography,
  Button,
  LinearProgress,
  Paper,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Grid from "@mui/material/Grid";

import type { AppDispatch, RootState } from "../../store/store";
import {
  fetchProducts,
  deleteProduct,
} from "../../store/product-slice";

const ProductList: React.FC = () => {
  const products = useSelector((state: RootState) => state.products.products);
  const isLoading = useSelector((state: RootState) => state.products.isLoading);
  const dispatch = useDispatch<AppDispatch>();

  // Fetch products on mount
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleDelete = (id: string) => {
    dispatch(deleteProduct(id));
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 4 }}>
      {isLoading && <LinearProgress />}
      {products.map((product) => (
        <Paper key={product.id} elevation={2} sx={{ p: 2 }}>
          <Grid container spacing={2} alignItems="center">
            {/* Product Info */}
            <Grid size={{ xs: 12, sm: 6 }}>
              <Typography variant="h6">{product.name}</Typography>
              <Typography variant="body2" color="text.secondary">
                Category: {product.category} | Price: ₹{product.price} | Stock: {product.stock}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {product.description}
              </Typography>
            </Grid>

            {/* Actions */}
            <Grid size={{ xs: 12, sm: 6 }}>
              <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1 }}>
                <Button
                  variant="outlined"
                  color="primary"
                  startIcon={<EditIcon />}
                  onClick={() => {
                    // TODO: Implement update modal or navigation
                    alert(`Edit product ${product.name}`);
                  }}
                >
                  Edit
                </Button>
                <Button
                  variant="outlined"
                  color="error"
                  startIcon={<DeleteIcon />}
                  onClick={() => handleDelete(product.id)}
                >
                  Delete
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      ))}
    </Box>
  );
};

export default ProductList;
