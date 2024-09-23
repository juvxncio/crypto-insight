import React, { useEffect, useState } from 'react';
import { View, Image, ActivityIndicator } from 'react-native';
import { FlatList, Box, Text, Button, VStack, HStack } from 'native-base';
import axios from 'axios';

interface Crypto {
  id: string;
  name: string;
  symbol: string;
  price: number;
  logo: string;
}

const ITEM_HEIGHT = 80;

const CryptoItem: React.FC<{ item: Crypto; onPress: () => void; isExpanded: boolean }> = React.memo(({ item, onPress, isExpanded }) => (
  <VStack>
    <Button onPress={onPress} bg="white" borderColor="gray.200" borderWidth={1} borderRadius="md" mb={2}>
      <HStack alignItems="center" justifyContent="space-between" w="100%">
        <HStack alignItems="center">
          <Image source={{ uri: item.logo }} style={{ width: 40, height: 40, marginRight: 10 }} />
          <VStack>
            <Text fontSize="lg" fontWeight="bold">{item.name}</Text>
            <Text fontSize="sm" color="gray.500">{item.symbol}</Text>
          </VStack>
        </HStack>
        <Text fontSize="lg" fontWeight="bold">${item.price.toFixed(2)}</Text>
      </HStack>
    </Button>
    
    {isExpanded && (
      <Box p={3} backgroundColor="gray.100">
        <Text>Mais informações sobre {item.name}</Text>
      </Box>
    )}
  </VStack>
));

const ListaCriptos: React.FC = () => {
  const [cryptos, setCryptos] = useState<Crypto[]>([]);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingMore, setLoadingMore] = useState<boolean>(false);

  useEffect(() => {
    fetchCryptos();
  }, [page]);

  const fetchCryptos = async () => {
    if (loading) return;
    setLoading(true);
    try {
      const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
        params: {
          vs_currency: 'brl',
          order: 'market_cap_desc',
          per_page: 10,
          page: page,
        },
      });
      const data = response.data.map((crypto: any) => ({
        id: crypto.id,
        name: crypto.name,
        symbol: crypto.symbol.toUpperCase(),
        price: crypto.current_price,
        logo: crypto.image,
      }));
      setCryptos(prevCryptos => [...prevCryptos, ...data]);
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 429) {
        console.error('Limite de requisições atingido. Esperando 10 segundos antes de tentar novamente.');
        await new Promise(resolve => setTimeout(resolve, 10000));
        fetchCryptos();
      } else {
        console.error(error);
      }
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  };

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const handleLoadMore = () => {
    if (!loadingMore) {
      setLoadingMore(true);
      setPage(prevPage => prevPage + 1);
    }
  };

  const renderItem = ({ item }: { item: Crypto }) => (
    <CryptoItem 
      item={item} 
      onPress={() => toggleExpand(item.id)} 
      isExpanded={expandedId === item.id} 
    />
  );

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <FlatList
        data={cryptos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.1}
        ListFooterComponent={loadingMore ? <ActivityIndicator size="large" color="#0000ff" /> : null}
      />
    </View>
  );
};

export default ListaCriptos;
